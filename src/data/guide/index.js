import { programmingFundamentalsDomain } from './programmingFundamentals.js';
import { dataStructuresAlgorithmsDomain } from './dataStructuresAlgorithms.js';
import { databasesSqlDomain } from './databasesSql.js';
import { webDevelopmentDomain } from './webDevelopment.js';
import { networkingDomain } from './networking.js';
import { devOpsInfrastructureDomain } from './devOpsInfrastructure.js';
import { cloudSystemDesignDomain } from './cloudSystemDesign.js';
import { securityAuthenticationDomain } from './securityAuthentication.js';
import { aiAgenticSystemsDomain } from './aiAgenticSystems.js';
import { automationWorkflowsDomain } from './automationWorkflows.js';
import { platformsEmergingTechDomain } from './platformsEmergingTech.js';
import { developerToolsEcosystemsDomain } from './developerToolsEcosystems.js';
import { processPracticeDomain } from './processPractice.js';
import { dataScienceDomain } from './dataScience.js';
import { languageEcosystemsDomain } from './languageEcosystems.js';
import { devEnvironmentToolingDomain } from './devEnvironmentTooling.js';

export const DOMAINS = [
  programmingFundamentalsDomain,
  dataStructuresAlgorithmsDomain,
  databasesSqlDomain,
  webDevelopmentDomain,
  networkingDomain,
  devOpsInfrastructureDomain,
  cloudSystemDesignDomain,
  securityAuthenticationDomain,
  aiAgenticSystemsDomain,
  automationWorkflowsDomain,
  platformsEmergingTechDomain,
  developerToolsEcosystemsDomain,
  processPracticeDomain,
  dataScienceDomain,
  languageEcosystemsDomain,
  devEnvironmentToolingDomain
];

export const ALL_GUIDE_ENTRIES = DOMAINS.flatMap((d) =>
  d.entries.map((e) => ({ ...e, domain: d.domain, color: d.color }))
);
