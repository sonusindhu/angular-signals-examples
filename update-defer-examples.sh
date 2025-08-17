#!/bin/bash

# Update defer examples 7-11 with container structure

for i in {7..11}; do
    file="src/app/examples/defer-block/defer-example${i}/defer-example${i}.component.html"
    if [ -f "$file" ]; then
        echo "Updating $file..."
        # Add container div at the beginning
        sed -i '1s/^/<div class="example-container">\n/' "$file"
        # Add closing div at the end
        echo "</div>" >> "$file"
        # Fix the mat-tab-group line
        sed -i 's/<mat-tab-group mat-stretch-tabs>/<mat-tab-group mat-stretch-tabs>/' "$file"
    fi
done

echo "HTML updates complete!"
