import React, { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-32 sm:w-40 h-10 bg-topcoder-blue/20 rounded flex items-center justify-center">
                <span className="text-topcoder-blue font-figtree font-bold text-sm sm:text-base">TOPCODER</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-moon-gray/30"></div>
              <div className="w-24 sm:w-32 h-10 bg-nasa-red/20 rounded flex items-center justify-center">
                <span className="text-nasa-red font-figtree font-bold text-xs sm:text-sm">NASA</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('overview')} className="text-moon-gray hover:text-topcoder-blue transition-colors text-sm font-nunito">Overview</button>
              <button onClick={() => scrollToSection('details')} className="text-moon-gray hover:text-topcoder-blue transition-colors text-sm font-nunito">Details</button>
              <button onClick={() => scrollToSection('prizes')} className="text-moon-gray hover:text-topcoder-blue transition-colors text-sm font-nunito">Prizes</button>
              <button onClick={() => scrollToSection('participate')} className="text-moon-gray hover:text-topcoder-blue transition-colors text-sm font-nunito">Participate</button>
            </nav>
            <button className="md:hidden text-moon-gray">
              <span className="material-icons-rounded-rounded">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 122, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 122, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        {/* Crater Detection Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-40 h-40 rounded-full border-2 border-nasa-red/40 animate-pulse"></div>
          <div className="absolute top-40 right-[15%] w-24 h-24 rounded-full border-2 border-nasa-red/30"></div>
          <div className="absolute bottom-32 left-[20%] w-32 h-32 rounded-full border-2 border-nasa-red/35"></div>
          <div className="absolute top-1/2 right-[25%] w-28 h-28 rounded-full border-2 border-nasa-red/25"></div>
          <div className="absolute bottom-20 right-[30%] w-36 h-36 rounded-full border-2 border-nasa-red/30 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        {/* Data Points */}
        <div className="absolute inset-0">
          <div className="absolute top-[25%] left-[12%] text-xs text-topcoder-blue/60 font-mono">Crater 0.83</div>
          <div className="absolute top-[45%] right-[18%] text-xs text-topcoder-blue/60 font-mono">Crater 0.92</div>
          <div className="absolute bottom-[35%] left-[22%] text-xs text-topcoder-blue/60 font-mono">Crater 0.76</div>
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-nasa-red/20 rounded-full border border-nasa-red/30 glow-red">
            <p className="text-nasa-red font-figtree font-semibold text-sm sm:text-base">Over $50,000 in prizes!!!</p>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-figtree font-bold mb-6 bg-gradient-to-r from-white via-moon-gray to-topcoder-blue bg-clip-text text-transparent">
            NASA Crater Detection
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-moon-gray font-nunito mb-12 max-w-3xl mx-auto">
            Write code. Detect craters. Advance lunar science.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => scrollToSection('participate')} className="w-full sm:w-auto btn-primary btn-primary-large glow-blue flex items-center justify-center gap-2">
              <span>Join the Challenge</span>
              <span className="material-icons-rounded-rounded">arrow_forward</span>
            </button>
            <button onClick={() => scrollToSection('overview')} className="w-full sm:w-auto btn-outline-primary btn-outline-large border-moon-gray text-moon-gray hover:border-moon-gray">
              Learn More
            </button>
          </div>
          
          <div className="mt-16 flex justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-figtree font-bold text-topcoder-blue">$50K</p>
              <p className="text-sm text-moon-gray mt-1">Total Prizes</p>
            </div>
            <div className="w-px bg-moon-gray/30"></div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-figtree font-bold text-topcoder-blue">Nov 6</p>
              <p className="text-sm text-moon-gray mt-1">Launch Date</p>
            </div>
            <div className="w-px bg-moon-gray/30"></div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-figtree font-bold text-topcoder-blue">6</p>
              <p className="text-sm text-moon-gray mt-1">Winners</p>
            </div>
          </div>
        </div>
        
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('overview')} className="text-topcoder-blue hover:text-white transition-colors" aria-label="Scroll down">
            <span className="material-icons-rounded text-4xl">expand_more</span>
          </button>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-figtree font-bold mb-4 text-white">The Challenge</h2>
            <div className="w-20 h-1 bg-topcoder-blue mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-moon-gray/80 max-w-2xl mx-auto font-nunito">Understanding crater detection for the future of space exploration</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-moon-gray leading-relaxed font-nunito">
                Crater rims are vital landmarks for planetary science and navigation. Yet detecting them in real imagery is tough, with shadows, lighting shifts, and broken edges obscuring their shape. This project invites you to develop methods that can reliably fit ellipses to crater rims, helping advance future space exploration.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-[#0a0a0a] rounded-lg p-8 border border-moon-gray/20 overflow-hidden relative">
                {/* Simulated Lunar Surface with Detection Overlay */}
                <div className="w-full h-full bg-gradient-radial from-moon-gray/20 to-transparent relative">
                  {/* Grid overlay */}
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 122, 255, 0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 122, 255, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}></div>
                  {/* Detected craters with labels */}
                  <div className="absolute top-[20%] left-[25%] w-20 h-20 rounded-full border-2 border-nasa-red"></div>
                  <div className="absolute top-[18%] left-[23%] text-[10px] text-nasa-red font-mono">Crater 0.91</div>
                  <div className="absolute top-[55%] right-[20%] w-14 h-14 rounded-full border-2 border-nasa-red"></div>
                  <div className="absolute top-[53%] right-[18%] text-[10px] text-nasa-red font-mono">Crater 0.87</div>
                  <div className="absolute bottom-[25%] left-[35%] w-24 h-24 rounded-full border-2 border-nasa-red"></div>
                  <div className="absolute bottom-[23%] left-[33%] text-[10px] text-nasa-red font-mono">Crater 0.95</div>
                  {/* Scanning line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-topcoder-blue/10 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="details" className="py-16 sm:py-24 bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-figtree font-bold mb-4 text-white">Technical Details</h2>
            <div className="w-20 h-1 bg-nasa-red mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-moon-gray/80 max-w-2xl mx-auto font-nunito">Advanced terrain-based optical navigation for lunar missions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-moon-gray leading-relaxed font-nunito">
                In the pursuit of next generation, terrain-based optical navigation, NASA is developing a system that will use a visible-light camera on a spacecraft to capture orbital images of lunar terrain and process the imagery to:
              </p>
              
              <ul className="space-y-4">
                {[
                  'Detect the crater rims in the images',
                  'Identify the craters from a catalog',
                  'Estimate the camera/vehicle position based on the identified craters'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-icons-rounded text-topcoder-blue mt-1">check_circle</span>
                    <span className="text-moon-gray font-nunito">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-moon-gray leading-relaxed font-nunito">
                Topcoder will help NASA develop a software function that can read in such imagery and reliably detect ellipses along the edges of visible crater rims.
              </p>
            </div>
            
            <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-nasa-red/20">
              <h3 className="text-2xl font-figtree font-bold mb-6 text-white flex items-center gap-2">
                <span className="material-icons-rounded text-nasa-red">analytics</span>
                Key Challenges
              </h3>
              <ul className="space-y-4">
                {[
                  { text: 'Varying altitudes and viewing angles', metric: '85%' },
                  { text: 'Different crater densities and sizes', metric: '92%' },
                  { text: 'Rim sharpness and completeness variation', metric: '78%' },
                  { text: 'Lighting and shadowing conditions', metric: '88%' },
                  { text: 'High contrast environments', metric: '81%' },
                  { text: 'Presence of non-crater features', metric: '76%' }
                ].map((challenge, idx) => (
                  <li key={idx} className="group">
                    <div className="flex items-start gap-3">
                      <span className="material-icons-rounded text-nasa-red text-xl mt-0.5">warning</span>
                      <div className="flex-1">
                        <span className="text-moon-gray font-nunito group-hover:text-white transition-colors block">{challenge.text}</span>
                        <div className="mt-2 h-1.5 bg-moon-gray/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-nasa-red to-topcoder-blue rounded-full transition-all duration-1000" style={{width: challenge.metric}}></div>
                        </div>
                        <span className="text-xs text-topcoder-blue/60 font-mono mt-1 block">Complexity: {challenge.metric}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Phase / Prizes Section */}
      <section id="prizes" className="py-16 sm:py-24 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-figtree font-bold mb-4 text-white">Prize Distribution</h2>
            <div className="w-20 h-1 bg-topcoder-blue mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-moon-gray/80 font-nunito mb-2">Marathon Match launching November 6</p>
            <p className="text-3xl font-figtree font-bold text-topcoder-blue">$50,000 Total Prize Pool</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { place: '1st', prize: '$20,000', color: 'topcoder-blue', glow: 'glow-blue' },
              { place: '2nd', prize: '$15,000', color: 'topcoder-blue', glow: 'glow-blue' },
              { place: '3rd', prize: '$10,000', color: 'topcoder-blue', glow: 'glow-blue' },
              { place: '4th', prize: '$3,000', color: 'moon-gray', glow: '' },
              { place: '5th', prize: '$2,000', color: 'moon-gray', glow: '' },
              { place: '6th', prize: '$1,000', color: 'moon-gray', glow: '' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-moon-gray/10 hover:border-topcoder-blue/50 transition-all duration-300 ${item.glow} group relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-topcoder-blue/5 rounded-full blur-2xl"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="material-icons-rounded text-5xl text-nasa-red group-hover:scale-110 transition-transform">emoji_events</span>
                    <span className={`text-4xl sm:text-5xl font-figtree font-bold text-${item.color}`}>{item.place}</span>
                  </div>
                  <p className="text-xs uppercase tracking-wide text-moon-gray/60 mb-1 font-nunito font-semibold">Place</p>
                  <p className={`text-2xl sm:text-3xl font-figtree font-bold text-${item.color}`}>{item.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section id="participate" className="py-16 sm:py-24 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-figtree font-bold mb-4 text-white">How to Participate</h2>
            <div className="w-20 h-1 bg-topcoder-blue mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-moon-gray/80 font-nunito">Get started in 4 simple steps</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: '01', 
                icon: 'person_add', 
                title: 'Join Topcoder', 
                desc: 'Sign up for free and become a Topcoder member',
                link: 'https://www.topcoder.com/join'
              },
              { 
                step: '02', 
                icon: 'search', 
                title: 'Find Challenge', 
                desc: 'Navigate to the NASA Crater Detection challenge',
                link: 'https://www.topcoder.com/challenges'
              },
              { 
                step: '03', 
                icon: 'code', 
                title: 'Start Coding', 
                desc: 'Download datasets and submit your solution',
                link: 'https://www.topcoder.com/community/data-science'
              },
              { 
                step: '04', 
                icon: 'emoji_events', 
                title: 'Win Prizes', 
                desc: 'Compete with the best and earn rewards',
                link: 'https://www.topcoder.com/community/member-programs'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-8 border border-moon-gray/10 hover:border-topcoder-blue/50 transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-topcoder-blue rounded-full flex items-center justify-center font-figtree font-bold text-white text-lg shadow-lg">
                    {item.step}
                  </div>
                  <span className="material-icons-rounded text-6xl text-topcoder-blue mb-4 block group-hover:scale-110 transition-transform">{item.icon}</span>
                  <h3 className="text-xl font-figtree font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-moon-gray font-nunito mb-4 leading-relaxed">{item.desc}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-topcoder-blue hover:text-white font-nunito font-semibold transition-colors text-sm">
                    <span>Learn more</span>
                    <span className="material-icons-rounded text-lg">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-figtree font-bold mb-4 text-white">Resources</h2>
            <div className="w-20 h-1 bg-nasa-red mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-moon-gray/80 font-nunito">Everything you need to get started and succeed</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Topcoder Resources */}
            <div className="bg-gradient-to-br from-topcoder-blue/10 to-transparent rounded-2xl p-8 border border-topcoder-blue/20 hover:border-topcoder-blue/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-topcoder-blue/20 flex items-center justify-center">
                  <span className="material-icons-rounded text-topcoder-blue text-2xl">school</span>
                </div>
                <h3 className="text-2xl font-figtree font-bold text-white">Topcoder Resources</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: 'What are Topcoder challenges?', icon: 'help_outline', link: 'https://www.topcoder.com/community/competitive-programming/tutorials' },
                  { title: 'How to win Data Science Challenges', icon: 'workspace_premium', link: 'https://www.topcoder.com/community/data-science' },
                  { title: 'Marathon Match Guide', icon: 'menu_book', link: 'https://www.topcoder.com/community/competitive-programming' },
                  { title: 'Topcoder Community Forums', icon: 'forum', link: 'https://www.topcoder.com/community' }
                ].map((resource, idx) => (
                  <li key={idx}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-moon-gray hover:text-topcoder-blue transition-colors group">
                      <span className="material-icons-rounded group-hover:scale-110 transition-transform">{resource.icon}</span>
                      <span className="font-nunito">{resource.title}</span>
                      <span className="material-icons-rounded ml-auto text-sm">arrow_forward</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* NASA Resources */}
            <div className="bg-gradient-to-br from-nasa-red/10 to-transparent rounded-2xl p-8 border border-nasa-red/20 hover:border-nasa-red/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-nasa-red/20 flex items-center justify-center">
                  <span className="material-icons-rounded text-nasa-red text-2xl">rocket_launch</span>
                </div>
                <h3 className="text-2xl font-figtree font-bold text-white">NASA Resources</h3>
              </div>
              <ul className="space-y-4">
                {[
                  { title: 'Moon Crater Database Robbins', icon: 'database', link: 'https://data.nasa.gov/' },
                  { title: 'Lunar Reconnaissance Orbiter', icon: 'satellite', link: 'https://www.nasa.gov/mission_pages/LRO/main/' },
                  { title: 'Terrain-Based Navigation Research', icon: 'explore', link: 'https://www.nasa.gov/technology/' },
                  { title: 'NASA Planetary Science Division', icon: 'public', link: 'https://science.nasa.gov/planetary-science/' }
                ].map((resource, idx) => (
                  <li key={idx}>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-moon-gray hover:text-nasa-red transition-colors group">
                      <span className="material-icons-rounded group-hover:scale-110 transition-transform">{resource.icon}</span>
                      <span className="font-nunito">{resource.title}</span>
                      <span className="material-icons-rounded ml-auto text-sm">arrow_forward</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="py-16 sm:py-24 bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-figtree font-bold mb-4 text-white">Leaderboard</h2>
            <div className="w-20 h-1 bg-topcoder-blue mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-moon-gray/80 font-nunito">Top performers will be displayed here after challenge completion</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl border border-moon-gray/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-topcoder-blue/10 border-b border-moon-gray/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-figtree font-semibold text-white">Rank</th>
                    <th className="px-6 py-4 text-left text-sm font-figtree font-semibold text-white">Competitor</th>
                    <th className="px-6 py-4 text-left text-sm font-figtree font-semibold text-white">Score</th>
                    <th className="px-6 py-4 text-left text-sm font-figtree font-semibold text-white">Prize</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rank: 1, name: 'TBD', score: '-', prize: '$20,000' },
                    { rank: 2, name: 'TBD', score: '-', prize: '$15,000' },
                    { rank: 3, name: 'TBD', score: '-', prize: '$10,000' },
                    { rank: 4, name: 'TBD', score: '-', prize: '$3,000' },
                    { rank: 5, name: 'TBD', score: '-', prize: '$2,000' },
                    { rank: 6, name: 'TBD', score: '-', prize: '$1,000' }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-moon-gray/5 hover:bg-moon-gray/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="material-icons-rounded text-nasa-red">emoji_events</span>
                          <span className="font-figtree font-bold text-white">{row.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-moon-gray font-nunito">{row.name}</td>
                      <td className="px-6 py-4 text-moon-gray font-nunito">{row.score}</td>
                      <td className="px-6 py-4 text-topcoder-blue font-figtree font-semibold">{row.prize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 text-center border-t border-moon-gray/10">
              <button className="btn-outline-primary">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-moon-gray/10 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="w-40 h-12 bg-topcoder-blue/20 rounded flex items-center justify-center mb-4">
                <span className="text-topcoder-blue font-figtree font-bold">TOPCODER</span>
              </div>
              <p className="text-moon-gray text-sm font-nunito">Connecting the world's top talent with opportunities to solve complex challenges.</p>
            </div>
            
            <div>
              <h4 className="font-figtree font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { text: 'About', link: 'https://www.topcoder.com/about' },
                  { text: 'Challenges', link: 'https://www.topcoder.com/challenges' },
                  { text: 'Community', link: 'https://www.topcoder.com/community' },
                  { text: 'Help Center', link: 'https://www.topcoder.com/help' }
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-moon-gray hover:text-topcoder-blue transition-colors text-sm font-nunito">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-figtree font-bold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                {[
                  { name: 'twitter', link: 'https://twitter.com/topcoder', icon: 'tag' },
                  { name: 'facebook', link: 'https://www.facebook.com/topcoder', icon: 'tag' },
                  { name: 'linkedin', link: 'https://www.linkedin.com/company/topcoder', icon: 'tag' },
                  { name: 'youtube', link: 'https://www.youtube.com/topcoder', icon: 'tag' }
                ].map((social, idx) => (
                  <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-moon-gray/10 hover:bg-topcoder-blue/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="material-icons-rounded text-moon-gray hover:text-topcoder-blue text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-moon-gray/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-moon-gray text-sm font-nunito">© 2025 Topcoder. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <div className="w-32 h-10 bg-nasa-red/20 rounded flex items-center justify-center">
                <span className="text-nasa-red font-figtree font-bold text-sm">NASA</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

