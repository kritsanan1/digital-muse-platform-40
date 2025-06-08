
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Key, ExternalLink, Eye, EyeOff } from 'lucide-react';
import { useGeneration } from '@/contexts/GenerationContext';

export const ApiTokenSetup = () => {
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setApiToken } = useGeneration();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;

    setIsLoading(true);
    try {
      setApiToken(token.trim());
      // Token is saved, component will re-render and disappear
    } catch (error) {
      console.error('Failed to set API token:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="glass-card p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Key className="w-8 h-8 text-black" />
        </div>
        <h3 className="text-2xl font-playfair font-bold gradient-text mb-2">
          Connect Your Replicate API
        </h3>
        <p className="text-foreground/70">
          Enter your Replicate API token to start generating professional artwork
        </p>
      </div>

      <Alert className="mb-6 border-gold-500/20 bg-gold-500/5">
        <AlertDescription className="text-sm">
          <strong>How to get your API token:</strong>
          <br />
          1. Visit{' '}
          <a 
            href="https://replicate.com/account/api-tokens" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 inline-flex items-center"
          >
            Replicate API Tokens <ExternalLink className="w-3 h-3 ml-1" />
          </a>
          <br />
          2. Create a new token
          <br />
          3. Copy and paste it below
        </p>
      </Alert>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type={showToken ? 'text' : 'password'}
            placeholder="r8_..."
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="pr-12 bg-black/30 border-gold-500/20 focus:border-gold-500"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
            onClick={() => setShowToken(!showToken)}
          >
            {showToken ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>

        <Button
          type="submit"
          disabled={!token.trim() || isLoading}
          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500"
        >
          {isLoading ? 'Connecting...' : 'Connect API'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-foreground/60">
        Your API token is stored locally and never shared with our servers
      </div>
    </Card>
  );
};
