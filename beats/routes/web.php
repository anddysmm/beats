<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SongsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\PlaylistsController;
use App\Http\Controllers\ArtistsController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\AlbumsController;
use App\Http\Controllers\AdminController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [SongsController::class, 'index'])->name('home');

Route::get('/event', function () {
    return Inertia::render('Events');
})->name('event');


Route::get('/pageSongs', [SongsController::class, 'index']);

Route::get('/search', [SearchController::class, 'searchView'])->name('search');
Route::get('/searching', [SearchController::class, 'SearchContent'])->name('search');

Route::get('/albums', 'App\Http\Controllers\AlbumsController@index')->name('albums.index');
Route::get('/albums/create', 'App\Http\Controllers\AlbumsController@create')->name('albums.create');
Route::post('/albums', 'App\Http\Controllers\AlbumsController@store')->name('albums.store');


Route::get('/signin', function () {
    return view('signin');
})->name('signin');



Route::post('/adduser', [UsersController::class, 'signinUser'])->name('adduser');
Route::post('/verifyuser', [UsersController::class, 'loginUser'])->name('verifyuser');

Route::get('/search', function () {
    return Inertia::render('Search');
})->name('search');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/artist/{artist}', [ArtistsController::class, 'getApiData'])->name('artist');
    Route::get('/playlists', [PlaylistsController::class, 'ListPlaylists'])->name('playlists');
    Route::post('/playlists/add', [PlaylistsController::class, 'AddPlaylists'])->name('add_playlist');
    Route::post('/playlists/addSong', [PlaylistsController::class, 'addSongToPlaylist'])->name('add_playlist');
    Route::get('/playlist/{id}', [PlaylistsController::class, 'listPlaylistSongs'])->name('playlist_songs');
    Route::get('/album/{id}', [AlbumsController::class, 'listAlbumSongs'])->name('playlist_songs');
    Route::get('/playlist/remove/{id}', [PlaylistsController::class, 'removePlaylist'])->name('remove_playlist');
    Route::get('/song/{id}', [SongsController::class, 'playSong'])->name('song');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/addArtist', [AdminController::class, 'addArtist'])->name('addArtist');
    Route::post('/admin/addArtist', [AdminController::class, 'store'])->name('addArtist');
    Route::get('/admin/addAlbum', [AdminController::class, 'showAddAlbumForm'])->name('showAddAlbumForm');
    Route::post('/admin/addAlbum', [AdminController::class, 'addAlbum'])->name('addAlbum');
    Route::get('/admin/addSong', [AdminController::class, 'showAddSongForm'])->name('admin.showAddSongForm');
    Route::post('/admin/addSong', [AdminController::class, 'addSong'])->name('admin.addSong');
});

require __DIR__ . '/auth.php';
