import os

def merge_files(startpath, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        for root, _, files in os.walk(startpath):
            for file in files:
                file_path = os.path.join(root, file)
                f.write(f'File: {file}\n')
                f.write(f'Path: {file_path}\n')
                f.write('Content:\n')
                try:
                    with open(file_path, 'r', encoding='utf-8', errors='ignore') as file_content:
                        f.write(f'{file_content.read()}\n')
                except Exception as e:
                    f.write(f'Error reading file: {e}\n')
                f.write('\n' + '-'*80 + '\n')  # Add a separator between files

# Get the path of the current script
script_path = os.path.dirname(os.path.abspath(__file__))

# Specify the output text file
output_file = os.path.join(script_path, 'merged_textfile.txt')

# Merge the content of all sub-files into the specified text file
merge_files(script_path, output_file)
