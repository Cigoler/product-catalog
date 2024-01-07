import fs from 'fs/promises';
import path from 'path';
import yaml from 'js-yaml';

const directoryPath = path.join(process.cwd(), 'src/content/products'); // Update this path to your content directory

async function checkYAMLFiles() {
    try {
        const items = await fs.readdir(directoryPath, { withFileTypes: true });
        for (const item of items) {
            if (item.isFile() && item.name.endsWith('.md')) {
                try {
                    const filePath = path.join(directoryPath, item.name);
                    const fileContents = await fs.readFile(filePath, 'utf8');
                    const yamlContent = fileContents.split('---')[1]; // Extract YAML front matter
                    yaml.load(yamlContent); // Parse only the YAML content
                    console.log(item.name + ' - OK');
                } catch (e) {
                    console.error(item.name + ' - ERROR: ' + e.message);
                }
            }
        }
    } catch (err) {
        console.error('Unable to scan directory: ' + err.message);
    }
}

checkYAMLFiles();