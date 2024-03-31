import React,{ FC} from "react";
import { CandlestickSeries } from "./series/CandlestickSeries";
import { ChartCanvas, Charts, lastVisibleItemBasedZoomAnchor } from "../core";
import { discontinuousTimeScaleProviderBuilder } from "./scales";
import { format } from "d3-format";
import { XAxis, YAxis } from "./axes";
import { timeFormat } from "d3-time-format";
import { OHLCTooltip} from "./tooltip";
import { CrossHairCursor,   EdgeIndicator,  MouseCoordinateX, MouseCoordinateY, } from "./coordinates";
import { AreaSeries } from "./series/AreaSeries";
import { HeikinAshiSeries } from "./series/HeikinAshiSeries";
import { ChartCase, chartState, indicatorState, oscillatorState} from "../../../../../recoil/Atom";
import { useRecoilValue } from "recoil";
import { useIndicator } from "../../../../../hooks/useIndicator";
import { useData } from "../../../../../hooks/useData";
import { BarSeries } from "./series/BarSeries";



const StockChart: FC = props =>{

  const{wsData, plain} = useData()
  const { ema26, bollinger, rsiOsc,macdOsc, smaI,wmaI,stochasticOsc,sarI} = useIndicator();
  const ShowIndicators = useRecoilValue(indicatorState)
  const showOsc = useRecoilValue(oscillatorState)
  const showChart = useRecoilValue(chartState)

// const indicators: Record<string, FC<> = {}
//  const indicatorsToShow = () => {  
//  }

 const ScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor((d) => new Date(d.date));

     wmaI(smaI(ema26(bollinger(stochasticOsc(rsiOsc(sarI(wsData)))))));
     
    const { data, xScale,  xAccessor, displayXAccessor} = ScaleProvider(wsData);
     

    var height = window.innerHeight-110;

    const margin = { left: 0, right: 48, top: 0, bottom: 4 };

    

    const pricesDisplayFormat = format(".5f");
    const max = xAccessor(data[data.length - 1]);
    const min = xAccessor(data[Math.max(0, data.length - 100)])
    const xExtents = [min, max + 5];

    const dateTimeFormat = " %I:%M:%S";
    const timeDisplayFormat = timeFormat(dateTimeFormat);
    const gridHeight = height - margin.top - margin.bottom;

    const elderRayHeight = 100;
    const elderRayOrigin = (_:any, h:any) => [0, h - elderRayHeight];
    const chartHeight = gridHeight - elderRayHeight;
    const  candleChartExtents = (data:any) => {
      return [data.high, data.low];
    };

  
    return(
      <ChartCanvas
          height={window.innerHeight-80}
          ratio={3}
          width={window.innerWidth-570}       
          data={data}
          displayXAccessor={displayXAccessor}
          seriesName="Data"
          xScale={xScale}
          xAccessor={xAccessor}
          xExtents={xExtents}
          zoomAnchor={lastVisibleItemBasedZoomAnchor}
      >

          <Charts id={3} height={chartHeight} yExtents={candleChartExtents} >
            
              <XAxis 
              showTickLabel={false}
              showGridLines 
              tickLabelFill="#70808c" 
              strokeStyle='transparent' 
              gridLinesStrokeStyle="rgba(26, 29, 33, 0.8)"/>

            l <YAxis 
              showGridLines 
              strokeStyle='transparent' 
              tickLabelFill="#70808c" 
              gridLinesStrokeStyle="rgba(26, 29, 33, 0.8)"/>

          {/* SWITCH CHARTS */}

              {(() => {
                  switch (showChart) {
                  case ChartCase.Area:
                      return <AreaSeries/>

                  case ChartCase.Candlestick:
                      return <CandlestickSeries/>

                  case ChartCase.Ashi:
                      return<HeikinAshiSeries/>

                  case ChartCase.Bar:
                          return<BarSeries/>

                  default:
                      return <CandlestickSeries/>

                  }
              })()}

              <EdgeIndicator 
                itemType="last" 
                yAccessor={d => d.close}
              />
              <MouseCoordinateY displayFormat={pricesDisplayFormat} />
              <OHLCTooltip 
                origin={[8, 16]}  
                textFill='#70808c' 
                fontWeight={700} 
              />
              
            {/* Display Indicators */}
              <div>
                  {ShowIndicators.map(i => i.component)}
              </div>
          </Charts>


        <Charts
            id={1}
            height={elderRayHeight}
            origin={elderRayOrigin}
            yExtents={[0,stochasticOsc.accessor()]}
          
          >
             <MouseCoordinateX  displayFormat={timeDisplayFormat}/>

              <XAxis 
              showTickLabel={true}
              showGridLines 
              tickLabelFill="#70808c" 
              strokeStyle='transparent' 
              gridLinesStrokeStyle="rgba(26, 29, 33, 0.8)"/>

              <>
              {showOsc.map(o => o.component)}
              </>

        </Charts>
        <CrossHairCursor /> 
      </ChartCanvas> 
 )}

export default StockChart