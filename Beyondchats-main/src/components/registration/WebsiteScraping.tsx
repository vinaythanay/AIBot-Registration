import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface WebsiteScrapingProps {
  onNext: () => void;
  onBack: () => void;
}

interface Page {
  url: string;
  status: "pending" | "scraping" | "completed";
  chunks: string[];
}

const dummyPages: Page[] = [
  {
    url: "/about",
    status: "completed",
    chunks: [
      "Company history and mission statement",
      "Team member biographies",
      "Company values and culture",
    ],
  },
  {
    url: "/products",
    status: "completed",
    chunks: [
      "Product features and specifications",
      "Pricing information",
      "Technical details",
    ],
  },
  {
    url: "/contact",
    status: "scraping",
    chunks: ["Contact form", "Office locations"],
  },
  {
    url: "/blog",
    status: "pending",
    chunks: [],
  },
];

const WebsiteScraping = ({ onNext, onBack }: WebsiteScrapingProps) => {
  const [progress, setProgress] = useState(0);
  const [pages, setPages] = useState<Page[]>(dummyPages);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 300);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status: Page["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "scraping":
        return "bg-yellow-500";
      case "pending":
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-center">Website Analysis</h2>
        <p className="text-gray-500 text-center">
          We're analyzing your website to train your chatbot
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Overall Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="h-[300px] overflow-y-auto">
            <CardHeader>
              <CardTitle>Pages Detected</CardTitle>
              <CardDescription>
                Click on a page to see extracted data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {pages.map((page) => (
                  <li
                    key={page.url}
                    className={`p-2 rounded cursor-pointer hover:bg-gray-100 ${
                      selectedPage?.url === page.url ? "bg-gray-100" : ""
                    }`}
                    onClick={() => setSelectedPage(page)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{page.url}</span>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(page.status)}
                      >
                        {page.status}
                      </Badge>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="h-[300px] overflow-y-auto">
            <CardHeader>
              <CardTitle>Extracted Data</CardTitle>
              <CardDescription>
                {selectedPage
                  ? `Data chunks from ${selectedPage.url}`
                  : "Select a page to view data"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedPage ? (
                <ul className="space-y-2">
                  {selectedPage.chunks.map((chunk, index) => (
                    <li
                      key={index}
                      className="p-2 bg-gray-50 rounded text-sm text-gray-700"
                    >
                      {chunk}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                  No page selected
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Continue to Integration
        </Button>
      </div>
    </div>
  );
};

export default WebsiteScraping;