"use client";

import { useState, useEffect } from "react";
import { Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

export default function UploadPage() {
  const [preImage, setPreImage] = useState<string | null>(null);
  const [postImage, setPostImage] = useState<string | null>(null);
  const [training, setTraining] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "pre" | "post") => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "pre") {
          setPreImage(e.target?.result as string);
        } else {
          setPostImage(e.target?.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const startTraining = () => {
    if (!preImage || !postImage) {
      toast.error("Please upload both pre and post plantation images");
      return;
    }

    setTraining(true);
    setError(null);
    setProgress(0);

    // Random stopping point between 20 and 94
    const stoppingPoint = Math.floor(Math.random() * (94 - 20 + 1)) + 20;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= stoppingPoint) {
          clearInterval(interval);
          return stoppingPoint;
        }
        return prev + 1;
      });
    }, 50);

    // Set error after 2 minutes
    setTimeout(() => {
      if (training) {
        setError("Unknown error");
        clearInterval(interval);
      }
    }, 120000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      setTraining(false);
      setProgress(0);
      setError(null);
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F9FA] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Upload Images</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ImageUploadCard
            title="Pre-Plantation Image"
            image={preImage}
            onChange={(e) => handleImageUpload(e, "pre")}
          />
          <ImageUploadCard
            title="Post-Plantation Image"
            image={postImage}
            onChange={(e) => handleImageUpload(e, "post")}
          />
        </div>

        <div className="max-w-xl mx-auto">
          {training && (
            <div className="mb-8">
              <Progress value={progress} className="h-2" />
              <p className="text-center mt-4 text-gray-600">
                {error ? (
                  <span className="text-red-500 flex items-center justify-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    {error}
                  </span>
                ) : (
                  "Training in progress..."
                )}
              </p>
            </div>
          )}

          <Button
            size="lg"
            className="w-full bg-[#28A745] hover:bg-[#218838]"
            onClick={startTraining}
            disabled={training || !preImage || !postImage}
          >
            {training ? "Training..." : "Train Model"}
          </Button>
        </div>
      </div>
    </main>
  );
}

function ImageUploadCard({ title, image, onChange }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden mb-4">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Upload className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
          id={title}
        />
        <label
          htmlFor={title}
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#28A745] rounded-md hover:bg-[#218838] cursor-pointer"
        >
          Upload Image
        </label>
      </div>
    </Card>
  );
}