<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist; 

class ArtistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Artist::create([
            'name' => 'Michael',
            'surname' => 'Jackson',
            'nationality' => 'American',
            'artistName' => 'Michael Jackson',
            'imgUrl' => '/storage/images/michaelJackson.jpg'

        ]);

        Artist::create([
            'name' => 'The Temptations',
            'surname' => 'The Temptations',
            'nationality' => 'American',
            'artistName' => 'The Temptations',
            'imgUrl' => '/storage/images/theTemptations.jpg'
        ]);

        Artist::create([
            'name' => 'Ben',
            'surname' => 'E. King',
            'nationality' => 'American',
            'artistName' => 'Ben E. King',
            'imgUrl' => '/storage/images/benE.jpeg'
        ]);

        Artist::create([
            'name' => 'Peter',
            'surname' => 'Andre',
            'nationality' => 'British',
            'artistName' => 'Peter Andre',
            'imgUrl' => '/storage/images/peterAndre.jpg'
        ]);

        Artist::create([
            'name' => 'Ariana',
            'surname' => 'Grande',
            'nationality' => 'American',
            'artistName' => 'Ariana Grande',
            'imgUrl' => '/storage/images/arianaGrande.jpg'
        ]);

        Artist::create([
            'name' => 'weeknd',
            'surname' => 'weeknd',
            'nationality' => 'Canada',
            'artistName' => 'weeknd',
            'imgUrl' => '/storage/images/Weekend.jpg'

        ]);
    }
}
