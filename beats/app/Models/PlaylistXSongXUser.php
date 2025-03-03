<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaylistXSongXUser extends Model
{
    use HasFactory;

    protected $fillable = ['song_id', 'playlist_id', 'user_id'];
    protected $table = 'playlist_x_song_xuser';
    use HasFactory;

    public function song()
    {
        return $this->belongsTo(Song::class);
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
