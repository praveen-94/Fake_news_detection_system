from flask import Flask, request, render_template
import joblib

pipeline = joblib.load('./pipeline.sav')

app = Flask(__name__)

def get_all_query(title, author, text):
    total= title + author + text
    total = [total]
    return total

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/result', methods=['GET', 'POST'])
def result():

    result=request.form
    query_title = result['title']
    query_author = result['author']
    query_text = result['text']
    print(query_text)
    query = get_all_query(query_title, query_author, query_text)
    pred = pipeline.predict(query)
    print(pred)
    if(pred==0):
     return render_template('fake.html')
    else:
     return render_template('real.html')


if __name__ == '__main__':
    app.run(debug=True)
