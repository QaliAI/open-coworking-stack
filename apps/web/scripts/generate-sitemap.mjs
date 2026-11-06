import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
async function htmlFiles(dir){const entries=await fs.readdir(dir,{withFileTypes:true});const all=await Promise.all(entries.map(e=>e.isDirectory()?htmlFiles(path.join(dir,e.name)):e.name.endsWith('.html')?[path.join(dir,e.name)]:[]));return all.flat();}
function canonical(html){const tag=(html.match(/<link\b[^>]*>/gi)||[]).find(t=>/rel=["']canonical["']/i.test(t));return tag?.match(/href=["']([^"']+)/i)?.[1]?.replaceAll('&amp;','&');}
const home=canonical(await fs.readFile(path.join(root,'index.html'),'utf8'));
if(!home)throw Error('Home canonical is required for sitemap generation');
const origin=new URL(home).origin,urls=new Set();
for(const file of await htmlFiles(root)){const html=await fs.readFile(file,'utf8');if(path.basename(file)==='404.html'||/noindex/i.test((html.match(/<meta[^>]*name=["']robots["'][^>]*>/i)||[])[0]||'')||/http-equiv=["']refresh["']/i.test(html))continue;const url=canonical(html);if(url&&new URL(url).origin===origin)urls.add(url);}
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
await fs.writeFile(path.join(root,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+[...urls].sort().map(u=>'  <url><loc>'+esc(u)+'</loc></url>').join('\n')+'\n</urlset>\n');
await fs.writeFile(path.join(root,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: '+home.replace(/\/?$/,'/')+'sitemap.xml\n');
console.log('Generated canonical sitemap for '+urls.size+' public resource pages.');
