<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\Song;
use App\Models\User;
use App\Models\PlaylistXSongXUser;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PlaylistsController extends Controller
{

    public function addSongToPlaylist(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:playlists,id',
            'song_id' => 'required|exists:songs,id'
        ]);

        // Buscamos la playlist por su ID y el ID del usuario autenticado
        $playlist = Playlist::where('id', $request->id)
            ->where('user_id', Auth::id())
            ->first();

        // Verificamos si la playlist existe
        if (!$playlist) {
            return redirect()->back()->withErrors(['id' => 'No se encontró ninguna playlist con ese ID']);
        }

        // Verificamos si la canción ya está en la playlist
        if (
            PlaylistXSongXUser::where('song_id', $request->song_id)
                ->where('user_id', Auth::id())
                ->where('playlist_id', $playlist->id)
                ->exists()
        ) {
            return redirect()->back()->withErrors(['song_id' => 'La canción ya está en la playlist']);
        }

        // Añadimos la canción a la playlist
        PlaylistXSongXUser::create([
            'playlist_id' => $request->id,
            'user_id' => Auth::id(),
            'song_id' => $request->song_id,
        ]);

        $count = PlaylistXSongXUser::where('playlist_id', $playlist->id)
            ->where('user_id', Auth::id())
            ->count();

        if ($count >= 1) {
            $firstSong = PlaylistXSongXUser::where('playlist_id', $playlist->id)
                ->where('user_id', Auth::id())
                ->orderBy('created_at')
                ->first();

            $song = Song::findOrFail($firstSong->song_id);
            $playlist->update(['urlCover' => $song->urlCover]);
        }


    }
    public function removeSongFromPlaylist($playlistid, $songId)
    {
        // Buscamos la playlist por su ID y el ID del usuario autenticado
        $playlist = Playlist::where('id', $playlistid)
            ->where('user_id', Auth::id())
            ->first();

        // Verificamos si la playlist existe
        if (!$playlist) {
            // Si no se encuentra la playlist, lanzamos un mensaje de error
            return redirect()->back()->withErrors(['name' => 'No se encontró ninguna playlist con ese ID']);
        }

        // Verificamos si la canción está en la playlist
        if (!$playlist->songs()->where('id', $songId)->exists()) {
            return redirect()->back()->withErrors(['name' => 'La canción no está en la playlist']);
        }

        // Buscamos la canción por su ID
        $song = Song::findOrFail($songId);

        // Eliminamos la canción de la playlist
        $playlist->songs()->detach($song);

        // Redirigimos de vuelta a la página anterior
        return Inertia::location(route('playlistsong'));
    }
    public function removePlaylist($playlistid)
    {

        // Buscamos la playlist por su nombre y el ID del usuario autenticado
        $playlist = Playlist::where('id', $playlistid)
            ->where('user_id', Auth::user()->id)
            ->first();

        if ($playlist) {
            // Si encontramos la playlist, la eliminamos
            $playlist->delete();
        } else {
            // Si no encontramos la playlist, lanzamos un mensaje de error
            return redirect()->back()->withErrors(['name' => 'No se encontró ninguna playlist con ese nombre']);
        }

        // Redirigimos de vuelta a la página anterior
        return redirect('/playlists');

    }


    public function AddPlaylists(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $playlist = Playlist::create([
            'name' => $request->name,
            'user_id' => Auth::user()->id,
        ]);

        // Redirige de vuelta a la vista de listas de reproducción
        return redirect('/playlists');
    }

    public function ListPlaylists()
    {
        // Obtener el usuario actual autenticado
        $user = Auth::user();

        // Obtener las listas de reproducción del usuario actual utilizando la relación definida en el modelo User
        $playlists = $user->playlists()->get()->toArray();

        return Inertia::render('Playlists', ['playlists' => $playlists]);
    }
    public function listPlaylistSongs($playlistId)
    {
        // Obtener las canciones de la playlist específica del usuario actual
        $playlist = Playlist::find($playlistId);
        $playlistSongs = $playlist->songs->toArray();

        // Retornar la vista Inertia con las canciones de la playlist específica del usuario
        return Inertia::render('Playlistsongs', [
            'playlistSongs' => $playlistSongs,
            'playlist' => $playlist,
        ]);
    }



}
