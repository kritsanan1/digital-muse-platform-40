
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Webhook, Cloud, Zap, Copy, ExternalLink, Play } from "lucide-react";

export const APIIntegration = () => {
  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/generate",
      description: "Generate images with custom parameters",
      example: `{
  "prompt": "Professional headshot photo",
  "style": "photorealistic",
  "resolution": "4K",
  "model": "portrait-pro"
}`
    },
    {
      method: "GET",
      endpoint: "/api/v1/images/{id}",
      description: "Retrieve generated image details",
      example: `{
  "id": "img_12345",
  "status": "completed",
  "url": "https://cdn.example.com/image.jpg",
  "metadata": {...}
}`
    },
    {
      method: "POST",
      endpoint: "/api/v1/batch",
      description: "Process multiple images in batch",
      example: `{
  "requests": [
    {"prompt": "Image 1", ...},
    {"prompt": "Image 2", ...}
  ],
  "callback_url": "https://your-app.com/webhook"
}`
    }
  ];

  const integrationExamples = [
    {
      platform: "Adobe Photoshop",
      description: "Plugin for direct image generation within Photoshop",
      code: `// Photoshop CEP Extension
const generateImage = async (prompt) => {
  const response = await fetch('/api/v1/generate', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
    body: JSON.stringify({ prompt, style: 'photorealistic' })
  });
  return response.json();
};`
    },
    {
      platform: "Figma Plugin",
      description: "Generate images directly in your design workflow",
      code: `// Figma Plugin
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-image') {
    const imageData = await generateImage(msg.prompt);
    const imageNode = figma.createRectangle();
    imageNode.fills = [{ type: 'IMAGE', imageHash: imageData.hash }];
  }
};`
    },
    {
      platform: "WordPress",
      description: "Auto-generate featured images for blog posts",
      code: `// WordPress Hook
add_action('save_post', function($post_id) {
  if (!has_post_thumbnail($post_id)) {
    $title = get_the_title($post_id);
    $image_url = generate_featured_image($title);
    set_post_thumbnail($post_id, $image_url);
  }
});`
    }
  ];

  const webhookEvents = [
    { event: "image.generated", description: "Triggered when image generation is complete" },
    { event: "image.failed", description: "Triggered when image generation fails" },
    { event: "batch.completed", description: "Triggered when batch processing is finished" },
    { event: "quota.exceeded", description: "Triggered when usage quota is exceeded" }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-bold gradient-text mb-4">
          API & Integration Platform
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Powerful APIs and seamless integrations to connect our AI generation 
          capabilities with your existing creative workflows.
        </p>
      </div>

      <Tabs defaultValue="api" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="api">REST API</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="api" className="space-y-6">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-playfair font-semibold">API Endpoints</h3>
              <Badge variant="outline" className="border-gold-500/30 text-gold-400">
                v1.0
              </Badge>
            </div>
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge 
                      variant="outline" 
                      className={
                        endpoint.method === "POST" 
                          ? "border-green-500/30 text-green-400" 
                          : "border-blue-500/30 text-blue-400"
                      }
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono text-foreground">{endpoint.endpoint}</code>
                    <Button size="sm" variant="ghost">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-foreground/70 mb-3">{endpoint.description}</p>
                  <div className="bg-black/20 rounded-md p-3">
                    <pre className="text-xs text-foreground/80 overflow-x-auto">
                      <code>{endpoint.example}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-playfair font-semibold mb-6">Webhook Configuration</h3>
            <div className="space-y-4">
              <div className="border border-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Webhook className="w-4 h-4 mr-2 text-gold-400" />
                  Webhook Endpoint Setup
                </h4>
                <div className="bg-black/20 rounded-md p-3 mb-3">
                  <code className="text-sm text-foreground/80">
                    POST https://your-app.com/webhooks/ai-generator
                  </code>
                </div>
                <p className="text-sm text-foreground/60">
                  Configure your webhook endpoint to receive real-time notifications about generation status and events.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {webhookEvents.map((webhook, index) => (
                  <div key={index} className="border border-white/10 rounded-lg p-4">
                    <h5 className="font-medium text-foreground mb-1">{webhook.event}</h5>
                    <p className="text-sm text-foreground/60">{webhook.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Creative Software</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Direct plugins for Adobe Creative Suite, Figma, and Sketch
              </p>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Card>

            <Card className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Cloud Storage</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Automatic sync with Google Drive, Dropbox, and Adobe Creative Cloud
              </p>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </Card>

            <Card className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Automation</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Zapier, Make.com, and custom automation workflows
              </p>
              <Button size="sm" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                Automate
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="space-y-6">
            {integrationExamples.map((example, index) => (
              <Card key={index} className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{example.platform}</h3>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Play className="w-4 h-4 mr-2" />
                      Test
                    </Button>
                  </div>
                </div>
                <p className="text-foreground/70 mb-4">{example.description}</p>
                <div className="bg-black/20 rounded-md p-4">
                  <pre className="text-sm text-foreground/80 overflow-x-auto">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
