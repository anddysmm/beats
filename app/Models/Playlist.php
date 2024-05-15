<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'user_id',
        'urlCover'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function songs()
    {
        return $this->belongsToMany(Song::class, 'playlist_x_song_xuser', 'playlist_id', 'song_id')
                    ->withPivot('user_id');
    }
}
