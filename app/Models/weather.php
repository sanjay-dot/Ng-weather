<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class weather extends Model
{
    use HasFactory;

    protected $table ="weather";
    protected $fillable = [
        "City",
        "Country",
    ];
}
