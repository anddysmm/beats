<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist; 

use App\Models\Album;

class AlbumSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Obtener los IDs de los artistas
        $mjID = Artist::where('name', 'Michael')->value('id');
        $ttID = Artist::where('name', 'The Temptations')->value('id');
        $bkID = Artist::where('name', 'Ben')->value('id');
        $paID = Artist::where('name', 'Peter')->value('id');
        $agID = Artist::where('name', 'weeknd')->value('id');
        $pbcID = Artist::where('name', 'Jordan')->value('id');

        // Crear álbumes y asociarlos con los artistas
        $album = Album::create([
            'name' => 'Bad',
            'releaseDate' => 1987
        ]);
        $album->artists()->attach($mjID);

        $album = Album::create([
            'name' => 'After Hours',
            'releaseDate' => 2020
        ]);
        $album->artists()->attach($agID);

        $album = Album::create([
            'name' => 'The Temptations Sing Smokey',
            'releaseDate' => 1965
        ]);
        $album->artists()->attach($ttID);

        $album = Album::create([
            'name' => 'Dont Play That Song!',
            'releaseDate' => 1962
        ]);
        $album->artists()->attach($bkID);

        $album = Album::create([
            'name' => 'Natural',
            'releaseDate' => 1996
        ]);
        $album->artists()->attach($paID);

        $album = Album::create([
            'name' => 'Starboy',
            'releaseDate' => 2016
        ]);
        $album->artists()->attach($agID);
        $album->artists()->attach(5);

        $album = Album::create([
            'name' => 'Playboi Carti',
            'releaseDate' => 2017
        ]);
        $album->artists()->attach($pbcID);
        
    }
}

