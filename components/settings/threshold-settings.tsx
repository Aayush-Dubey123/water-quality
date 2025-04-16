"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

export function ThresholdSettings() {
  return (
    <Tabs defaultValue="ph">
      <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
        <TabsTrigger value="ph">pH</TabsTrigger>
        <TabsTrigger value="chlorine">Chlorine</TabsTrigger>
        <TabsTrigger value="temperature">Temperature</TabsTrigger>
        <TabsTrigger value="oxygen">Dissolved O₂</TabsTrigger>
        <TabsTrigger value="turbidity">Turbidity</TabsTrigger>
        <TabsTrigger value="tds">TDS</TabsTrigger>
      </TabsList>

      <TabsContent value="ph">
        <Card>
          <CardHeader>
            <CardTitle>pH Thresholds</CardTitle>
            <CardDescription>Configure the threshold values for pH monitoring</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Critical Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="6.0" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="9.0" />
                  </div>
                </div>
                <Slider defaultValue={[6.0, 9.0]} max={14} min={0} step={0.1} />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Warning Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="6.5" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="8.5" />
                  </div>
                </div>
                <Slider defaultValue={[6.5, 8.5]} max={14} min={0} step={0.1} />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Optimal Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="6.8" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="7.8" />
                  </div>
                </div>
                <Slider defaultValue={[6.8, 7.8]} max={14} min={0} step={0.1} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="chlorine">
        <Card>
          <CardHeader>
            <CardTitle>Chlorine Thresholds</CardTitle>
            <CardDescription>Configure the threshold values for chlorine monitoring (ppm)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Critical Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="0.2" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="3.0" />
                  </div>
                </div>
                <Slider defaultValue={[0.2, 3.0]} max={5} min={0} step={0.1} />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Warning Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="0.5" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="2.0" />
                  </div>
                </div>
                <Slider defaultValue={[0.5, 2.0]} max={5} min={0} step={0.1} />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Optimal Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="1.0" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="1.5" />
                  </div>
                </div>
                <Slider defaultValue={[1.0, 1.5]} max={5} min={0} step={0.1} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      {/* Other tabs would follow the same pattern */}
      <TabsContent value="temperature">
        <Card>
          <CardHeader>
            <CardTitle>Temperature Thresholds</CardTitle>
            <CardDescription>Configure the threshold values for temperature monitoring (°C)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Critical Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="15" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="35" />
                  </div>
                </div>
                <Slider defaultValue={[15, 35]} max={50} min={0} step={1} />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Warning Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="20" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="30" />
                  </div>
                </div>
                <Slider defaultValue={[20, 30]} max={50} min={0} step={1} />
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <Label>Optimal Range</Label>
                  <div className="flex items-center gap-2">
                    <Input className="w-20" defaultValue="22" />
                    <span>to</span>
                    <Input className="w-20" defaultValue="28" />
                  </div>
                </div>
                <Slider defaultValue={[22, 28]} max={50} min={0} step={1} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Reset to Defaults</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
