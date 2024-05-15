<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
   protected $fillable = ['album_id', 'name', 'releaseDate', 'urlSong', 'urlCover'];
   use HasFactory;

   public $timestamps = false;

   public function album()
    {
        return $this->belongsTo(Album::class);
    }
    public function playlists()
    {
        return $this->belongsToMany(Playlist::class, 'playlist_x_song_xuser', 'song_id', 'playlist_id')
                    ->withPivot('user_id');
    }
    public function artists()
    {
        return $this->album->artists();
    }
    public static function searchByName($name)
    {
        return Song::where('name', 'like', '%' . $name . '%')->get();
    }
}
