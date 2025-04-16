"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ParameterDetail } from "@/components/parameters/parameter-detail"

export function ParameterTabs() {
  return (
    <Tabs defaultValue="ph" className="w-full">
      <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
        <TabsTrigger value="ph">pH</TabsTrigger>
        <TabsTrigger value="chlorine">Chlorine</TabsTrigger>
        <TabsTrigger value="temperature">Temperature</TabsTrigger>
        <TabsTrigger value="oxygen">Dissolved O₂</TabsTrigger>
        <TabsTrigger value="turbidity">Turbidity</TabsTrigger>
        <TabsTrigger value="tds">TDS</TabsTrigger>
      </TabsList>
      <TabsContent value="ph">
        <ParameterDetail
          name="pH Level"
          value={7.2}
          unit=""
          minThreshold={6.5}
          maxThreshold={8.5}
          description="pH is a measure of how acidic or basic water is. The range goes from 0 to 14, with 7 being neutral."
          criticalLow={6.0}
          criticalHigh={9.0}
          warningLow={6.5}
          warningHigh={8.5}
          optimalLow={6.8}
          optimalHigh={7.8}
        />
      </TabsContent>
      <TabsContent value="chlorine">
        <ParameterDetail
          name="Chlorine Level"
          value={1.2}
          unit="ppm"
          minThreshold={0.5}
          maxThreshold={2.0}
          description="Chlorine is commonly used as a disinfectant in water treatment to kill harmful organisms."
          criticalLow={0.2}
          criticalHigh={3.0}
          warningLow={0.5}
          warningHigh={2.0}
          optimalLow={1.0}
          optimalHigh={1.5}
        />
      </TabsContent>
      <TabsContent value="temperature">
        <ParameterDetail
          name="Temperature"
          value={24.5}
          unit="°C"
          minThreshold={20}
          maxThreshold={30}
          description="Water temperature affects the rate of chemical reactions and the amount of dissolved oxygen in water."
          criticalLow={15}
          criticalHigh={35}
          warningLow={20}
          warningHigh={30}
          optimalLow={22}
          optimalHigh={28}
        />
      </TabsContent>
      <TabsContent value="oxygen">
        <ParameterDetail
          name="Dissolved Oxygen"
          value={8.3}
          unit="mg/L"
          minThreshold={6.0}
          maxThreshold={10.0}
          description="Dissolved oxygen is the amount of oxygen present in water, essential for aquatic life."
          criticalLow={4.0}
          criticalHigh={12.0}
          warningLow={6.0}
          warningHigh={10.0}
          optimalLow={7.0}
          optimalHigh={9.0}
        />
      </TabsContent>
      <TabsContent value="turbidity">
        <ParameterDetail
          name="Turbidity"
          value={3.8}
          unit="NTU"
          minThreshold={0.0}
          maxThreshold={3.0}
          description="Turbidity is a measure of water clarity and how much the material suspended in water decreases the passage of light."
          criticalLow={0.0}
          criticalHigh={5.0}
          warningLow={0.0}
          warningHigh={3.0}
          optimalLow={0.0}
          optimalHigh={1.0}
        />
      </TabsContent>
      <TabsContent value="tds">
        <ParameterDetail
          name="Total Dissolved Solids"
          value={342}
          unit="ppm"
          minThreshold={50}
          maxThreshold={300}
          description="TDS is a measure of the combined content of all inorganic and organic substances in water in molecular, ionized, or micro-granular suspended form."
          criticalLow={0}
          criticalHigh={500}
          warningLow={50}
          warningHigh={300}
          optimalLow={100}
          optimalHigh={250}
        />
      </TabsContent>
    </Tabs>
  )
}
