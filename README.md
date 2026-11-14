# Portfolio — Punit Shah

A static portfolio site in plain HTML, CSS and vanilla JS. It has no framework and no build step.

## Run locally
```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Finish before publishing
Run `grep -n TODO index.html` to list the placeholders:
- LinkedIn URL (hero + contact)
- Email (contact)
- `resume.pdf` (drop it in this folder and uncomment the hero link)
- Exact titles and dates for Flow, Snowflake, Gigster and H5/Lighthouse, plus highlights for the last two
- Education
- Location (footer)

## Updating projects
Each project is an `<article>` in `index.html`. Its demo GIF lives in `assets/<repo>.gif` with a still poster `assets/<repo>.jpg`, which is shown when the visitor prefers reduced motion. To refresh a GIF from its repo:
```sh
cp ../<repo>/assets/demo.gif assets/<repo>.gif
ffmpeg -y -sseof -0.5 -i assets/<repo>.gif -update 1 -frames:v 1 /tmp/p.png && sips -s format jpeg /tmp/p.png --out assets/<repo>.jpg
```

## Deploy (GitHub Pages)
1. Create the public repo `punit-labs/punit-labs.github.io`.
2. Push this folder to `main`.
3. Under Settings → Pages, set the source to "Deploy from a branch", `main` / root.
4. The site goes live at `https://punit-labs.github.io/`, which redirects to the custom domain **https://punitvshah.com/** (set by the `CNAME` file; DNS is managed in Cloudflare).
