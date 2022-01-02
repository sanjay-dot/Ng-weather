<?php

namespace App\Http\Controllers;

use App\Models\weather;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class weathercontroller extends Controller
{
    public function post(Request $request){

        $weather = new weather();
        $weather->City =$request->input('City');
        $weather->Country =$request->input('Country');
        $weather->save();

        return response()->json([
            "status" => 200,
            "message" =>"success",
        ]);
    }

   public function getData(){

        $users = DB::table('weather')->select('City','Country')->orderBy('City')->get();

        return response($users);
    }
}