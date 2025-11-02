import { useState } from "react";
import { Shield, CheckCircle2, XCircle, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";

interface VerificationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VerificationDialog({ open, onOpenChange }: VerificationDialogProps) {
  const [serialNumber, setSerialNumber] = useState("");
  const [verificationResult, setVerificationResult] = useState<"valid" | "invalid" | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = () => {
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      // Demo: Any serial starting with "UM-" is valid
      const isValid = serialNumber.toUpperCase().startsWith("UM-");
      setVerificationResult(isValid ? "valid" : "invalid");
      setIsVerifying(false);
    }, 1500);
  };

  const handleReset = () => {
    setSerialNumber("");
    setVerificationResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <DialogTitle>Anti-Counterfeit Verification</DialogTitle>
          </div>
          <DialogDescription>
            Enter the serial number or QR code data to verify the authenticity of your UNI-MEMMINGER product.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="serial">Serial Number / QR Code</Label>
            <Input
              id="serial"
              placeholder="UM-XXXXXXXX-XXXX"
              value={serialNumber}
              onChange={(e) => {
                setSerialNumber(e.target.value);
                setVerificationResult(null);
              }}
              disabled={isVerifying}
            />
          </div>

          {verificationResult && (
            <Alert variant={verificationResult === "valid" ? "default" : "destructive"}>
              <div className="flex items-start gap-3">
                {verificationResult === "valid" ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                <div className="flex-1">
                  <div className="mb-1">
                    {verificationResult === "valid" ? "Authentic Product" : "Invalid Serial Number"}
                  </div>
                  <AlertDescription>
                    {verificationResult === "valid"
                      ? "This is a genuine UNI-MEMMINGER product. Serial number verified in our global database."
                      : "This serial number could not be verified. Please check the number or contact our support team."}
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          )}

          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px]">1</span>
              </div>
              <p className="text-[14px]">Locate the serial number on your product label or packaging</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px]">2</span>
              </div>
              <p className="text-[14px]">Enter the complete serial number including prefix</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px]">3</span>
              </div>
              <p className="text-[14px]">Click verify to check authenticity in real-time</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {verificationResult ? (
            <Button onClick={handleReset} variant="outline" className="flex-1">
              Verify Another
            </Button>
          ) : (
            <Button
              onClick={handleVerify}
              disabled={!serialNumber || isVerifying}
              className="flex-1 gap-2"
            >
              <Search className="h-4 w-4" />
              {isVerifying ? "Verifying..." : "Verify Product"}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
