//THIS FILE IS NOT CORRECT, JUST THE CHAT GPT STUFF. 
//NEED TO UPDATE ONCE DB IS CREATED TO MATCH THE DB'S STRUCTURE


import { NextResponse } from 'next/server';
import client from '../../../lib/mongodb';

export async function GET() {
  try {
    const db = client.db(); // Use the default database or specify your database name here
    const goals = await db.collection('goals').find({}).toArray();
    return NextResponse.json(goals);
  } catch (error) {
    console.error('Failed to fetch goals:', error);
    return NextResponse.json({ error: 'Failed to fetch goals' }, { status: 500 });
  }
}
