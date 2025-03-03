<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'releaseDate'];
    public function songs()
    {
        return $this->hasMany(Song::class);
    }
    public function artists()
    {
        return $this->belongsToMany(Artist::class, 'artist_xalbum');
    }
    public $timestamps = false;

}
