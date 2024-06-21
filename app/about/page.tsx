
import React from 'react';
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LottieAnimation } from './lottieAnimation';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a social media company',
};



export default function About() {


  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Us</CardTitle>
          <CardDescription>Discover more about our social media company</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <LottieAnimation />
          </div>
          <p className="text-lg mb-4">
            We are a cutting-edge social media company dedicated to connecting people 
            and fostering meaningful relationships in the digital age.
          </p>
          <p className="text-lg mb-6">
            Our platform leverages the latest technologies to provide a seamless and 
            engaging user experience, while prioritizing privacy and user empowerment.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}