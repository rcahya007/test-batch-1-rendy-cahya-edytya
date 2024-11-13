<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataFeedback = DB::table('feedback')
            ->orderBy('id', 'desc')
            ->limit(10)
            ->get();
        return inertia('Feedback/index', ['dataFeedback' => $dataFeedback]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => [
                'required',
            ],
            'email' => [
                'required',
                'email',
                'max:255',
            ],
            'message' => [
                'required',
                'min:10'
            ]
        ]);

        $randomImageUrl = 'https://picsum.photos/500/500?random=' . rand();

        Feedback::create([
            'name' => $request->name,
            'email' => $request->email,
            'img_url' => $randomImageUrl,
            'message' => $request->message,
        ]);

        return redirect()->route('home')->with('success', 'Feedback sent successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feedback $feedback)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        //
    }
}
