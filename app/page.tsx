import { ArrowRight, Map, Trees as Tree, Brain, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d"
            alt="Aerial forest view"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            GreenGuard: AI-Powered Afforestation Monitoring
          </h1>
          <p className="text-xl mb-8">
            Track the survival and growth of trees with precision
          </p>
          <Link href="/upload">
            <Button size="lg" className="bg-[#28A745] hover:bg-[#218838]">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Map}
              title="Drone Image Analysis"
              description="Advanced aerial imagery processing for comprehensive forest monitoring"
            />
            <FeatureCard
              icon={Tree}
              title="Growth Monitoring"
              description="Track tree growth and health with precision metrics"
            />
            <FeatureCard
              icon={Brain}
              title="AI Insights"
              description="Machine learning powered analysis for accurate predictions"
            />
            <FeatureCard
              icon={Activity}
              title="Real-Time Metrics"
              description="Live statistics and monitoring of afforestation progress"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="50,000+" label="Trees Monitored" />
            <StatCard number="120+" label="Projects Analyzed" />
            <StatCard number="95%" label="Accuracy Rate" />
            <StatCard number="1,000" label="Areas Covered (sq km)" />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <Icon className="h-12 w-12 text-[#28A745] mb-4" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function StatCard({ number, label }) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-[#28A745]">
          {number}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
}