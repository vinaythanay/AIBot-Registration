import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessageSquare, LayoutDashboard } from "lucide-react";

// Dummy data for website scraping status
const websitePages = [
  { id: 1, url: '/home', status: 'completed', chunks: ['Welcome section', 'Product overview', 'Contact information'] },
  { id: 2, url: '/about', status: 'completed', chunks: ['Company history', 'Team members', 'Mission statement'] },
  { id: 3, url: '/products', status: 'pending', chunks: [] },
  { id: 4, url: '/contact', status: 'in_progress', chunks: ['Contact form'] },
];

const SuccessScreen = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const triggerConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
        });
      }, 400);
    };

    triggerConfetti();
  }, []);

  const handlePageClick = (page) => {
    setSelectedPage(page);
    setDialogOpen(true);
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center animate-fade-in">
        <h1 className="text-4xl font-bold text-primary-900 animate-scale-in">
          Setup Complete!
        </h1>
        <p className="text-gray-500 text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Your chatbot is being trained with your website content
        </p>
      </div>

      <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="flex-1 transform transition-all hover:scale-105 duration-300" 
            size="lg"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Start talking to your chatbot
          </Button>
          <Button 
            className="flex-1 transform transition-all hover:scale-105 duration-300" 
            size="lg"
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Explore Admin Panel
          </Button>
        </div>
      </div>

      <div className="animate-fade-in rounded-lg border p-4" style={{ animationDelay: "0.6s" }}>
        <h2 className="text-xl font-semibold mb-4">Website Content Analysis</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page URL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {websitePages.map((page) => (
              <TableRow key={page.id}>
                <TableCell>{page.url}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    page.status === 'completed' ? 'bg-green-100 text-green-800' :
                    page.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {page.status.charAt(0).toUpperCase() + page.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageClick(page)}
                    disabled={page.status === 'pending'}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center items-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="transform transition-all hover:scale-110 duration-300">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={48} round className="shadow-lg" />
          </FacebookShareButton>
        </div>
        <div className="transform transition-all hover:scale-110 duration-300">
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={48} round className="shadow-lg" />
          </TwitterShareButton>
        </div>
        <div className="transform transition-all hover:scale-110 duration-300">
          <LinkedinShareButton url={window.location.href}>
            <LinkedinIcon size={48} round className="shadow-lg" />
          </LinkedinShareButton>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Content Chunks - {selectedPage?.url}</DialogTitle>
          </DialogHeader>
          {selectedPage?.chunks.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2">
              {selectedPage.chunks.map((chunk, index) => (
                <li key={index} className="text-gray-700">{chunk}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No content chunks available yet.</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessScreen;