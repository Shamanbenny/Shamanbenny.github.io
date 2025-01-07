import React from 'react'

const ChessVersionInfo = () => {
  // Array of dictionaries containing information about chess bot versions
  const chessVersions = [
    {
      version: '0.0',
      keyFeatureTitle: 'Random Moves',
      featuresImplemented: ['None, just random moves XD'],
      avgDecisionTime: '0 seconds',
      noticeableWeakness: ['Absolutely no strategies involved'],
    },
    {
      version: '1.0',
      keyFeatureTitle: 'Minimax Algorithm',
      featuresImplemented: ['Uses basic depth-limited decision-making algorithm evaluated by maximizing player pieces and minimizing opponent pieces'],
      avgDecisionTime: '??? seconds',
      noticeableWeakness: ['Takes a long time to make decisions, which exponentially increases with each depth level', 'If depth is not high enough, it may make suboptimal/bad moves'],
    }
  ];

  return (
    <div className="mt-4 p-4 text-neutral-900 dark:text-neutral-300">
      <h1
        className="z-[6] mx-auto mb-3 w-[90%] border-b-2 border-neutral-900 pt-5 text-center text-[1.4rem]  dark:border-neutral-300 
        max-lg:pt-3 lg:text-[1.8rem] xl:mb-5 xl:text-[2rem] xxl:text-[2.4rem]"
      >
        Information Panel for Chess Bot Versions
      </h1>
      <div className="space-y-4">
        {chessVersions.map((versionInfo, index) => (
          <div
            key={index}
            className="p-4 rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800"
          >
            <h2 className="text-2xl font-semibold">
              Chess Bot Version {versionInfo.version}
            </h2>
            <p className="mt-2">
              <span className="font-bold">Key Feature:</span>{' '}
              {versionInfo.keyFeatureTitle}
            </p>
            <p className="mt-2">
              <span className="font-bold">Features Implemented:</span>
            </p>
            <ul className="list-disc list-inside mt-1">
              {versionInfo.featuresImplemented.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <p className="mt-2">
              <span className="font-bold">Average Decision Time:</span>{' '}
              {versionInfo.avgDecisionTime}
            </p>
            <p className="mt-2">
              <span className="font-bold">Noticeable Weakness:</span>
            </p>
            <ul className="list-disc list-inside mt-1">
              {versionInfo.noticeableWeakness.map((weakness, idx) => (
                <li key={idx}>{weakness}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChessVersionInfo