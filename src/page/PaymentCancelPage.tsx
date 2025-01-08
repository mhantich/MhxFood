import { XCircle, ArrowLeft, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const PaymentCancelPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-full bg-red-50 p-3">
              <XCircle className="w-12 h-12 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 text-center">
              Payment Cancelled
            </h1>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Alert variant="destructive" className="bg-red-50 border-red-200">
            <AlertTitle className="text-red-800">
              Your payment was not processed
            </AlertTitle>
            <AlertDescription className="text-red-600">
              The payment process was cancelled. No charges have been made to your account.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2 text-center text-gray-600">
            <p>
              If you experienced any issues during the payment process, please contact our support team.
            </p>
            <p className="text-sm">
              Reference ID: #PAY-{Math.random().toString(36).substr(2, 9)}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-3">
          <Button 
            variant="default"
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Try Payment Again
          </Button>
          
          <Button 
            variant="outline"
            className="w-full"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-4 w-4" />
            Return to Homepage
          </Button>
          
          <div className="text-center w-full">
            <Button 
              variant="link"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => window.location.href = '/support'}
            >
              Need help? Contact Support
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentCancelPage;