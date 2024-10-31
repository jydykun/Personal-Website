import click
from app import app

@click.group()
def flask_cli():
    pass

@click.command(help="Runs the application in debug mode.")
def run_debug():
    app.run(debug=True)

# Add Commands Here
flask_cli.add_command(run_debug)

if __name__ == "__main__":
    flask_cli()