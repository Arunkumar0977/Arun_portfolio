import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
const Education = () => {
  const educationData = [{
    institution: 'Maharana Institute of Professional Studies',
    location: 'Kanpur, UP, India',
    degree: 'Bachelor of Technology - Computer Science',
    grade: 'GPA: 7.91',
    status: 'Pursuing',
    period: '2021 - 2025'
  }, {
    institution: 'Sainik School Nalanda',
    location: 'Nalanda, Bihar, India',
    degree: 'Intermediate (10+2)',
    grade: 'Percentage: 84.5%',
    status: 'Completed',
    period: '2019 - 2021'
  }, {
    institution: 'Sainik School Nalanda',
    location: 'Nalanda, Bihar, India',
    degree: 'High School',
    grade: 'Percentage: 90.6%',
    status: 'Completed',
    period: '2017 - 2019'
  }];
  return <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and achievements that shaped my technical expertise
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => <Card key={index} className="bg-slate-800/50 border-slate-600 hover:bg-slate-800 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/20 p-3 rounded-full group-hover:bg-cyan-500/30 transition-colors duration-300">
                    <GraduationCap className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2">{edu.degree}</CardTitle>
                    <div className="text-cyan-400 font-semibold">{edu.institution}</div>
                    <div className="text-gray-400 text-sm">{edu.location}</div>
                  </div>
                  <div className="text-right">
                    
                    <div className={`text-sm px-3 py-1 rounded-full mt-2 ${edu.status === 'Pursuing' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                      {edu.status}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold text-white">{edu.grade}</div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Education;