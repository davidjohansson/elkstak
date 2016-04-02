*Kibana
http://ec2-52-59-245-42.eu-central-1.compute.amazonaws.com:5601/

*Logstash:
sudo vim /etc/logstash/conf.d/10-syslog.conf
tail -f /var/log/logstash/logstash.stdout &
tail -f /var/log/logstash/logstash.err 
sudo service logstash restart

*Slack:
I kanalen training:
/training mage=123 apa=456


curl -H "content-type: application/json" -XPOST 'http://52.59.245.42:31311' -d '
{
	"timestamp": "2009-07-07",
	"appa": "ook"
}
'

"message" => "token=MxXzzYDV8uMbYBYSk5qvfJp9&team_id=T0CT8L19B&team_domain=davidsegna&channel_id=C0E4U278A&channel_name=training&user_id=U0CT6G727&user_name=david&command=%2Ftraining&text=timestamp%3D2009-07-07+bankpress3g%3D70+brost%3D112.5+mage%3D91+nacke%3D42+fett%3D20.13%0A%2Ftraining+timestamp%3D2009-07-08+vikt%3D91.4%0A%2Ftraining+timestamp%3D2009-07-16+bankpress3g%3D70&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT0CT8L19B%2F19261236228%2FyqCSKSddC9WrHDJLVuqWzkXv"


curl  -XPOST "http://52.59.245.42:31311" -d "timestamp=2015-02-09&message="text=brost%3D108+mage%3D87.5+vikt%3D87.6+nacke%3D43+fett%3D15.27+fett2%3D14+a%3D"


5601: basic auth
