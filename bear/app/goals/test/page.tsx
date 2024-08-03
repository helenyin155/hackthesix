import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

const TestPage = () => {
    return (
        <Layout>
            <div>
                <Link href="/goals/1">Goals</Link>
                <h1>Test Page</h1>
                <p>This is a test page.</p>
            </div>
        </Layout>
    )
}

export default TestPage
