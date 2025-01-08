import { CheckCircle, Download, Home, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PaymentSuccessPage = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-green-50 p-3">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Payment Successful!
              </h1>
              <p className="text-gray-500 mt-2">
                Thank you for your payment
              </p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <Alert className="bg-green-50 border-green-200">
            <AlertTitle className="text-green-800">
              Payment Confirmed
            </AlertTitle>
            <AlertDescription className="text-green-700">
              Your payment has been processed successfully. A confirmation email has been sent to your registered email address.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{currentDate}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-600">Status:</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-3">
          <Button 
            variant="default"
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => console.log('Download receipt')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Receipt
          </Button>
          
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => window.location.href = '/'}
            >
              <Home className="mr-2 h-4 w-4" />
              Home
            </Button>
            
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {
                navigator.clipboard.writeText(orderNumber);
                alert('Order number copied!');
              }}
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
          
          <div className="text-center w-full pt-2">
            <p className="text-sm text-gray-500">
              Need help? <Button variant="link" className="text-green-600 hover:text-green-700 p-0" onClick={() => window.location.href = '/support'}>Contact Support</Button>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;