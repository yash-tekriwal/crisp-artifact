import React, { useState, useEffect } from 'react';

export const CrispFramework = () => {
  const [selectedStrategy, setSelectedStrategy] = useState('outbound');
  const [visibleSections, setVisibleSections] = useState([]);
  
  useEffect(() => {
    setVisibleSections([]);
    
    const sections = ['collect', 'reach', 'integrate', 'store', 'personalize'];
    
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => [...prev, section]);
      }, 300 * (index + 1));
    });
  }, [selectedStrategy]);
  
  const strategies = {
    outbound: {
      title: "Outbound",
      collect: {
        title: "Collect",
        description: "📊 Where do you get initial data about leads and customers from?",
        actions: [
          "🎯 Purchase intent data from data providers",
          "👥 Build Ideal Customer Profile (ICP) criteria",
          "📋 Create target account lists with key contacts"
        ],
        tools: [
          { name: "ZoomInfo", logoUrl: "https://logo.clearbit.com/zoominfo.com" },
          { name: "Bombora", logoUrl: "https://logo.clearbit.com/bombora.com" },
          { name: "Clearbit", logoUrl: "https://logo.clearbit.com/clay.com" },
          { name: "LinkedIn Sales Navigator", logoUrl: "https://logo.clearbit.com/linkedin.com" },
          { name: "Apollo.io", logoUrl: "https://logo.clearbit.com/apollo.io" }
        ],
        color: "#5cb85c"
      },
      reach: {
        title: "Reach",
        description: "📢 How do you communicate with customers at scale?",
        actions: [
          "📩 Set up multi-touch email sequences",
          "📞 Create call scripts with objection handling",
          "👔 Establish LinkedIn outreach strategy"
        ],
        tools: [
          { name: "Outreach", logoUrl: "https://logo.clearbit.com/outreach.io" },
          { name: "SalesLoft", logoUrl: "https://logo.clearbit.com/salesloft.com" },
          { name: "Apollo", logoUrl: "https://logo.clearbit.com/apollo.io" },
          { name: "Sendoso", logoUrl: "https://logo.clearbit.com/sendoso.com" },
          { name: "Drift", logoUrl: "https://logo.clearbit.com/drift.com" }
        ],
        color: "#5bc0de"
      },
      integrate: {
        title: "Integrate",
        description: "🔄 How does customer data move between every tool in your stack?",
        actions: [
          "🔄 Sync outreach data to CRM",
          "⚡ Connect email engagement to sales alerts",
          "🗺️ Map prospect interactions across channels"
        ],
        tools: [
          { name: "Zapier", logoUrl: "https://logo.clearbit.com/zapier.com" },
          { name: "Tray.io", logoUrl: "https://logo.clearbit.com/tray.io" },
          { name: "Workato", logoUrl: "https://logo.clearbit.com/workato.com" },
          { name: "HubSpot Operations Hub", logoUrl: "https://logo.clearbit.com/hubspot.com" },
          { name: "Segment", logoUrl: "https://logo.clearbit.com/segment.com" }
        ],
        color: "#f0ad4e"
      },
      store: {
        title: "Store",
        description: "💾 Where do you access and store all your customer + lead data?",
        actions: [
          "📊 Set up Salesforce/CRM opportunity stages",
          "📈 Create forecasting dashboards",
          "📝 Design activity logging framework"
        ],
        tools: [
          { name: "Salesforce", logoUrl: "https://logo.clearbit.com/salesforce.com" },
          { name: "HubSpot", logoUrl: "https://logo.clearbit.com/hubspot.com" },
          { name: "Pipedrive", logoUrl: "https://logo.clearbit.com/pipedrive.com" },
          { name: "Close", logoUrl: "https://logo.clearbit.com/close.com" },
          { name: "Freshsales", logoUrl: "https://logo.clearbit.com/freshworks.com" }
        ],
        color: "#d9534f"
      },
      personalize: {
        title: "Personalize",
        description: "🎯 How do you gain deeper insights and analytics on your customers?",
        actions: [
          "👤 Develop persona-based messaging",
          "📊 Create industry-specific case studies",
          "📈 Build prospect scoring model"
        ],
        tools: [
          { name: "Tableau", logoUrl: "https://logo.clearbit.com/tableau.com" },
          { name: "Looker", logoUrl: "https://logo.clearbit.com/looker.com" },
          { name: "Gong", logoUrl: "https://logo.clearbit.com/gong.io" },
          { name: "Chorus", logoUrl: "https://logo.clearbit.com/chorus.ai" },
          { name: "6sense", logoUrl: "https://logo.clearbit.com/6sense.com" }
        ],
        color: "#9370db"
      }
    },
    
    inbound: {
      title: "Inbound",
      collect: {
        title: "Collect",
        description: "📊 Where do you get initial data about leads and customers from?",
        actions: [
          "📱 Install website tracking and analytics",
          "📝 Create gated content and lead forms",
          "🔍 Implement product usage analytics"
        ],
        tools: [
          { name: "Google Analytics", logoUrl: "https://logo.clearbit.com/google.com" },
          { name: "Heap", logoUrl: "https://logo.clearbit.com/heap.io" },
          { name: "Hotjar", logoUrl: "https://logo.clearbit.com/hotjar.com" },
          { name: "Clearbit", logoUrl: "https://logo.clearbit.com/clearbit.com" },
          { name: "Mixpanel", logoUrl: "https://logo.clearbit.com/mixpanel.com" }
        ],
        color: "#5cb85c"
      },
      reach: {
        title: "Reach",
        description: "📢 How do you communicate with customers at scale?",
        actions: [
          "✍️ Develop SEO content strategy",
          "🔄 Create automated nurture workflows",
          "📚 Build knowledge base and resources"
        ],
        tools: [
          { name: "HubSpot", logoUrl: "https://logo.clearbit.com/hubspot.com" },
          { name: "Marketo", logoUrl: "https://logo.clearbit.com/marketo.com" },
          { name: "Mailchimp", logoUrl: "https://logo.clearbit.com/mailchimp.com" },
          { name: "ActiveCampaign", logoUrl: "https://logo.clearbit.com/activecampaign.com" },
          { name: "Intercom", logoUrl: "https://logo.clearbit.com/intercom.io" }
        ],
        color: "#5bc0de"
      },
      integrate: {
        title: "Integrate",
        description: "🔄 How does customer data move between every tool in your stack?",
        actions: [
          "⚙️ Connect marketing automation to CRM",
          "📊 Sync product usage data to marketing",
          "📈 Implement lead scoring system"
        ],
        tools: [
          { name: "Segment", logoUrl: "https://logo.clearbit.com/segment.com" },
          { name: "Zapier", logoUrl: "https://logo.clearbit.com/zapier.com" },
          { name: "Tray.io", logoUrl: "https://logo.clearbit.com/tray.io" },
          { name: "Fivetran", logoUrl: "https://logo.clearbit.com/fivetran.com" },
          { name: "Mulesoft", logoUrl: "https://logo.clearbit.com/mulesoft.com" }
        ],
        color: "#f0ad4e"
      },
      store: {
        title: "Store",
        description: "💾 Where do you access and store all your customer + lead data?",
        actions: [
          "🗄️ Create unified customer data platform",
          "📊 Build conversion attribution models",
          "📝 Develop content engagement tracking"
        ],
        tools: [
          { name: "HubSpot", logoUrl: "https://logo.clearbit.com/hubspot.com" },
          { name: "Customer.io", logoUrl: "https://logo.clearbit.com/customer.io" },
          { name: "Amplitude", logoUrl: "https://logo.clearbit.com/amplitude.com" },
          { name: "Segment", logoUrl: "https://logo.clearbit.com/segment.com" },
          { name: "Snowflake", logoUrl: "https://logo.clearbit.com/snowflake.com" }
        ],
        color: "#d9534f"
      },
      personalize: {
        title: "Personalize",
        description: "🎯 How do you gain deeper insights and analytics on your customers?",
        actions: [
          "🎯 Implement behavior-based content recommendations",
          "📝 Create dynamic website personalization",
          "🔄 Develop progressive profiling system"
        ],
        tools: [
          { name: "Optimizely", logoUrl: "https://logo.clearbit.com/optimizely.com" },
          { name: "Amplitude", logoUrl: "https://logo.clearbit.com/amplitude.com" },
          { name: "VWO", logoUrl: "https://logo.clearbit.com/vwo.com" },
          { name: "RightMessage", logoUrl: "https://logo.clearbit.com/rightmessage.com" },
          { name: "Mutiny", logoUrl: "https://logo.clearbit.com/mutinyhq.com" }
        ],
        color: "#9370db"
      }
    },
    
    expansion: {
      title: "CX Expansion",
      collect: {
        title: "Collect",
        description: "📊 Where do you get initial data about leads and customers from?",
        actions: [
          "📊 Implement product usage analytics",
          "❤️ Create NPS/CSAT feedback loops",
          "💬 Track support ticket patterns"
        ],
        tools: [
          { name: "Pendo", logoUrl: "https://logo.clearbit.com/pendo.io" },
          { name: "Gainsight", logoUrl: "https://logo.clearbit.com/gainsight.com" },
          { name: "Mixpanel", logoUrl: "https://logo.clearbit.com/mixpanel.com" },
          { name: "Delighted", logoUrl: "https://logo.clearbit.com/delighted.com" },
          { name: "UserVoice", logoUrl: "https://logo.clearbit.com/uservoice.com" }
        ],
        color: "#5cb85c"
      },
      reach: {
        title: "Reach",
        description: "📢 How do you communicate with customers at scale?",
        actions: [
          "📧 Design customer success email campaigns",
          "📅 Set up Quarterly Business Reviews",
          "🎉 Create feature announcement process"
        ],
        tools: [
          { name: "Gainsight", logoUrl: "https://logo.clearbit.com/gainsight.com" },
          { name: "Intercom", logoUrl: "https://logo.clearbit.com/intercom.io" },
          { name: "CustomerSuccess.io", logoUrl: "https://logo.clearbit.com/customersuccess.io" },
          { name: "Vitally", logoUrl: "https://logo.clearbit.com/vitally.io" },
          { name: "ChurnZero", logoUrl: "https://logo.clearbit.com/churnzero.com" }
        ],
        color: "#5bc0de"
      },
      integrate: {
        title: "Integrate",
        description: "🔄 How does customer data move between every tool in your stack?",
        actions: [
          "🔄 Connect CS platform to CRM",
          "📞 Link support systems to customer data",
          "💰 Sync billing data to customer health"
        ],
        tools: [
          { name: "Segment", logoUrl: "https://logo.clearbit.com/segment.com" },
          { name: "Zapier", logoUrl: "https://logo.clearbit.com/zapier.com" },
          { name: "Tray.io", logoUrl: "https://logo.clearbit.com/tray.io" },
          { name: "Workato", logoUrl: "https://logo.clearbit.com/workato.com" },
          { name: "Boomi", logoUrl: "https://logo.clearbit.com/boomi.com" }
        ],
        color: "#f0ad4e"
      },
      store: {
        title: "Store",
        description: "💾 Where do you access and store all your customer + lead data?",
        actions: [
          "📊 Build customer health score dashboard",
          "📈 Develop renewal forecasting model",
          "🔍 Create expansion opportunity tracking"
        ],
        tools: [
          { name: "Salesforce", logoUrl: "https://logo.clearbit.com/salesforce.com" },
          { name: "Gainsight", logoUrl: "https://logo.clearbit.com/gainsight.com" },
          { name: "Totango", logoUrl: "https://logo.clearbit.com/totango.com" },
          { name: "Planhat", logoUrl: "https://logo.clearbit.com/planhat.com" },
          { name: "ClientSuccess", logoUrl: "https://logo.clearbit.com/clientsuccess.com" }
        ],
        color: "#d9534f"
      },
      personalize: {
        title: "Personalize",
        description: "🎯 How do you gain deeper insights and analytics on your customers?",
        actions: [
          "🎯 Create usage-based outreach triggers",
          "👥 Build customer segmentation model",
          "📈 Develop propensity to buy/expand models"
        ],
        tools: [
          { name: "Mixpanel", logoUrl: "https://logo.clearbit.com/mixpanel.com" },
          { name: "Totango", logoUrl: "https://logo.clearbit.com/totango.com" },
          { name: "Gainsight", logoUrl: "https://logo.clearbit.com/gainsight.com" },
          { name: "Pendo", logoUrl: "https://logo.clearbit.com/pendo.io" },
          { name: "Heap", logoUrl: "https://logo.clearbit.com/heap.io" }
        ],
        color: "#9370db"
      }
    }
  };

  const currentStrategy = strategies[selectedStrategy];
  
  const addOpacity = (hexColor, opacity = 0.15) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };
  
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto bg-gray-50 p-6 rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">CRISP Framework Flow</h1>
      
      <div className="w-full bg-white rounded-xl p-4 mb-6 text-center shadow-sm">
        <p className="text-gray-500 italic">
          Good growth ideas die without the right data and the ability to quickly act on it.
        </p>
      </div>
      
      <div className="flex w-full max-w-2xl bg-white rounded-full p-1 mb-10 shadow-sm">
        {Object.entries(strategies).map(([key, strategy]) => (
          <button
            key={key}
            className={`flex-1 py-3 px-6 rounded-full text-center transition-all duration-200 
              ${selectedStrategy === key 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'hover:bg-gray-100 text-gray-600'}`}
            onClick={() => setSelectedStrategy(key)}
          >
            {key === 'outbound' && '🚀 '}
            {key === 'inbound' && '🔄 '}
            {key === 'expansion' && '💼 '}
            {strategy.title}
          </button>
        ))}
      </div>
      
      <div className="w-full">
        {/* Collect */}
        {visibleSections.includes('collect') && (
          <div className="mb-10 animate-fadeIn">
            <div className="flex items-stretch">
              <div 
                className="w-1/3 p-5 rounded-tl-xl shadow-md flex flex-col"
                style={{ 
                  backgroundColor: addOpacity(currentStrategy.collect.color, 0.15),
                  borderLeft: `4px solid ${currentStrategy.collect.color}`
                }}
              >
                <h2 className="text-xl font-bold mb-2" style={{ color: currentStrategy.collect.color }}>C: Collect</h2>
                <p className="text-gray-700">{currentStrategy.collect.description}</p>
              </div>
              
              <div className="w-2/3 bg-white rounded-tr-xl p-5 shadow-md">
                <h3 className="text-lg font-bold mb-3" style={{ color: currentStrategy.collect.color }}>{currentStrategy.title} Actions:</h3>
                <ul className="space-y-3">
                  {currentStrategy.collect.actions.map((action, index) => (
                    <li key={`collect-${index}`} className="flex items-start">
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className="flex">
              <div 
                className="w-full bg-white rounded-b-xl p-3 shadow-md border-t border-gray-100"
                style={{ borderLeft: `4px solid ${currentStrategy.collect.color}` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mr-2" style={{ backgroundColor: currentStrategy.collect.color }}>TOOLS</span>
                  <span className="text-sm text-gray-500">Popular solutions for this step:</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {currentStrategy.collect.tools.map((tool, index) => (
                    <div key={`collect-tool-${index}`} className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-2">
                        <img src={tool.logoUrl} alt={tool.name} className="w-6 h-6 object-contain" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span className="text-lg">${tool.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Flow Arrow */}
            <div className="flex justify-center my-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10H18L12 16Z" fill="#CBD5E0"/>
              </svg>
            </div>
          </div>
        )}
        
        {/* Reach */}
        {visibleSections.includes('reach') && (
          <div className="mb-10 animate-fadeIn">
            <div className="flex items-stretch">
              <div 
                className="w-1/3 p-5 rounded-tl-xl shadow-md flex flex-col"
                style={{ 
                  backgroundColor: addOpacity(currentStrategy.reach.color, 0.15),
                  borderLeft: `4px solid ${currentStrategy.reach.color}`
                }}
              >
                <h2 className="text-xl font-bold mb-2" style={{ color: currentStrategy.reach.color }}>R: Reach</h2>
                <p className="text-gray-700">{currentStrategy.reach.description}</p>
              </div>
              
              <div className="w-2/3 bg-white rounded-tr-xl p-5 shadow-md">
                <h3 className="text-lg font-bold mb-3" style={{ color: currentStrategy.reach.color }}>{currentStrategy.title} Actions:</h3>
                <ul className="space-y-3">
                  {currentStrategy.reach.actions.map((action, index) => (
                    <li key={`reach-${index}`} className="flex items-start">
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className="flex">
              <div 
                className="w-full bg-white rounded-b-xl p-3 shadow-md border-t border-gray-100"
                style={{ borderLeft: `4px solid ${currentStrategy.reach.color}` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mr-2" style={{ backgroundColor: currentStrategy.reach.color }}>TOOLS</span>
                  <span className="text-sm text-gray-500">Popular solutions for this step:</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {currentStrategy.reach.tools.map((tool, index) => (
                    <div key={`reach-tool-${index}`} className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-2">
                        <img src={tool.logoUrl} alt={tool.name} className="w-6 h-6 object-contain" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span className="text-lg">${tool.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Flow Arrow */}
            <div className="flex justify-center my-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10H18L12 16Z" fill="#CBD5E0"/>
              </svg>
            </div>
          </div>
        )}
        
        {/* Integrate */}
        {visibleSections.includes('integrate') && (
          <div className="mb-10 animate-fadeIn">
            <div className="flex items-stretch">
              <div 
                className="w-1/3 p-5 rounded-tl-xl shadow-md flex flex-col"
                style={{ 
                  backgroundColor: addOpacity(currentStrategy.integrate.color, 0.15),
                  borderLeft: `4px solid ${currentStrategy.integrate.color}`
                }}
              >
                <h2 className="text-xl font-bold mb-2" style={{ color: currentStrategy.integrate.color }}>I: Integrate</h2>
                <p className="text-gray-700">{currentStrategy.integrate.description}</p>
              </div>
              
              <div className="w-2/3 bg-white rounded-tr-xl p-5 shadow-md">
                <h3 className="text-lg font-bold mb-3" style={{ color: currentStrategy.integrate.color }}>{currentStrategy.title} Actions:</h3>
                <ul className="space-y-3">
                  {currentStrategy.integrate.actions.map((action, index) => (
                    <li key={`integrate-${index}`} className="flex items-start">
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className="flex">
              <div 
                className="w-full bg-white rounded-b-xl p-3 shadow-md border-t border-gray-100"
                style={{ borderLeft: `4px solid ${currentStrategy.integrate.color}` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mr-2" style={{ backgroundColor: currentStrategy.integrate.color }}>TOOLS</span>
                  <span className="text-sm text-gray-500">Popular solutions for this step:</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {currentStrategy.integrate.tools.map((tool, index) => (
                    <div key={`integrate-tool-${index}`} className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-2">
                        <img src={tool.logoUrl} alt={tool.name} className="w-6 h-6 object-contain" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span className="text-lg">${tool.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Flow Arrow */}
            <div className="flex justify-center my-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10H18L12 16Z" fill="#CBD5E0"/>
              </svg>
            </div>
          </div>
        )}
        
        {/* Store */}
        {visibleSections.includes('store') && (
          <div className="mb-10 animate-fadeIn">
            <div className="flex items-stretch">
              <div 
                className="w-1/3 p-5 rounded-tl-xl shadow-md flex flex-col"
                style={{ 
                  backgroundColor: addOpacity(currentStrategy.store.color, 0.15),
                  borderLeft: `4px solid ${currentStrategy.store.color}`
                }}
              >
                <h2 className="text-xl font-bold mb-2" style={{ color: currentStrategy.store.color }}>S: Store</h2>
                <p className="text-gray-700">{currentStrategy.store.description}</p>
              </div>
              
              <div className="w-2/3 bg-white rounded-tr-xl p-5 shadow-md">
                <h3 className="text-lg font-bold mb-3" style={{ color: currentStrategy.store.color }}>{currentStrategy.title} Actions:</h3>
                <ul className="space-y-3">
                  {currentStrategy.store.actions.map((action, index) => (
                    <li key={`store-${index}`} className="flex items-start">
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className="flex">
              <div 
                className="w-full bg-white rounded-b-xl p-3 shadow-md border-t border-gray-100"
                style={{ borderLeft: `4px solid ${currentStrategy.store.color}` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mr-2" style={{ backgroundColor: currentStrategy.store.color }}>TOOLS</span>
                  <span className="text-sm text-gray-500">Popular solutions for this step:</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {currentStrategy.store.tools.map((tool, index) => (
                    <div key={`store-tool-${index}`} className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-2">
                        <img src={tool.logoUrl} alt={tool.name} className="w-6 h-6 object-contain" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span className="text-lg">${tool.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Flow Arrow */}
            <div className="flex justify-center my-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L6 10H18L12 16Z" fill="#CBD5E0"/>
              </svg>
            </div>
          </div>
        )}
        
        {/* Personalize */}
        {visibleSections.includes('personalize') && (
          <div className="mb-10 animate-fadeIn">
            <div className="flex items-stretch">
              <div 
                className="w-1/3 p-5 rounded-tl-xl shadow-md flex flex-col"
                style={{ 
                  backgroundColor: addOpacity(currentStrategy.personalize.color, 0.15),
                  borderLeft: `4px solid ${currentStrategy.personalize.color}`
                }}
              >
                <h2 className="text-xl font-bold mb-2" style={{ color: currentStrategy.personalize.color }}>P: Personalize</h2>
                <p className="text-gray-700">{currentStrategy.personalize.description}</p>
              </div>
              
              <div className="w-2/3 bg-white rounded-tr-xl p-5 shadow-md">
                <h3 className="text-lg font-bold mb-3" style={{ color: currentStrategy.personalize.color }}>{currentStrategy.title} Actions:</h3>
                <ul className="space-y-3">
                  {currentStrategy.personalize.actions.map((action, index) => (
                    <li key={`personalize-${index}`} className="flex items-start">
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Tools Section */}
            <div className="flex">
              <div 
                className="w-full bg-white rounded-b-xl p-3 shadow-md border-t border-gray-100"
                style={{ borderLeft: `4px solid ${currentStrategy.personalize.color}` }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded text-white mr-2" style={{ backgroundColor: currentStrategy.personalize.color }}>TOOLS</span>
                  <span className="text-sm text-gray-500">Popular solutions for this step:</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {currentStrategy.personalize.tools.map((tool, index) => (
                    <div key={`personalize-tool-${index}`} className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-2">
                        <img src={tool.logoUrl} alt={tool.name} className="w-6 h-6 object-contain" 
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `<span className="text-lg">${tool.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-700">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Technology Market Map */}
      {visibleSections.includes('personalize') && (
        <div className="w-full mt-6 bg-white rounded-xl p-5 shadow-md border-t-4 border-blue-600 animate-fadeIn">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🛠️ {currentStrategy.title} Tech Stack Market Map</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="text-center mb-2">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">COLLECT</span>
              </div>
              <div className="space-y-2">
                {currentStrategy.collect.tools.map((tool, index) => (
                  <div key={`map-collect-${index}`} className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <img src={tool.logoUrl} alt={tool.name} className="w-4 h-4 object-contain" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<span className="text-sm font-bold text-green-800">${tool.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="text-center mb-2">
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">REACH</span>
              </div>
              <div className="space-y-2">
                {currentStrategy.reach.tools.map((tool, index) => (
                  <div key={`map-reach-${index}`} className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <img src={tool.logoUrl} alt={tool.name} className="w-4 h-4 object-contain" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<span className="text-sm font-bold text-blue-800">${tool.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">INTEGRATE</span>
              </div>
              <div className="space-y-2">
                {currentStrategy.integrate.tools.map((tool, index) => (
                  <div key={`map-integrate-${index}`} className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
                      <img src={tool.logoUrl} alt={tool.name} className="w-4 h-4 object-contain" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<span className="text-sm font-bold text-yellow-800">${tool.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 p-3 rounded-lg border border-red-200">
              <div className="text-center mb-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">STORE</span>
              </div>
              <div className="space-y-2">
                {currentStrategy.store.tools.map((tool, index) => (
                  <div key={`map-store-${index}`} className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <img src={tool.logoUrl} alt={tool.name} className="w-4 h-4 object-contain" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<span className="text-sm font-bold text-red-800">${tool.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
              <div className="text-center mb-2">
                <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">PERSONALIZE</span>
              </div>
              <div className="space-y-2">
                {currentStrategy.personalize.tools.map((tool, index) => (
                  <div key={`map-personalize-${index}`} className="flex items-center bg-white p-2 rounded shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                      <img src={tool.logoUrl} alt={tool.name} className="w-4 h-4 object-contain" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentNode.innerHTML = `<span className="text-sm font-bold text-purple-800">${tool.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>
                    <span className="text-xs">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            Each category shows popular tools used for the {currentStrategy.title.toLowerCase()} strategy
          </div>
        </div>
      )}
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

