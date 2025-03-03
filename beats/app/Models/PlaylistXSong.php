<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlaylistXSong extends Model
{
    use HasFactory;

    protected $fillable = ['song_id', 'playlist_id'];
    use HasFactory;

    public function song()
    {
        return $this->belongsTo(Song::class);
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}
