<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArtistXAlbum extends Model
{
    use HasFactory;

    protected $fillable = ['album_id', 'artist_id'];
   use HasFactory;

   public $timestamps = false;

   public function album()
    {
        return $this->belongsTo(Album::class);
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}
