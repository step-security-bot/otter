import type { Rule } from '@angular-devkit/schematics';
import { createSchematicWithMetricsIfInstalled, getPackageInstallConfig, setupDependencies } from '@o3r/schematics';
import type { NgAddSchematicsSchema } from './schema';
import * as path from 'node:path';

const packageJsonPath = path.resolve(__dirname, '..', '..', 'package.json');

/**
 * Add Otter logger to an Angular Project
 * @param options
 */
function ngAddFn(options: NgAddSchematicsSchema): Rule {
  /* ng add rules */
  return (tree) => {
    return setupDependencies({
      projectName: options.projectName,
      dependencies: getPackageInstallConfig(packageJsonPath, tree, options.projectName, false, !!options.exactO3rVersion)
    });
  };
}

/**
 * Add Otter logger to an Angular Project
 */
export const ngAdd = createSchematicWithMetricsIfInstalled(ngAddFn);
