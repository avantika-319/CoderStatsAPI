module.exports = {
query_profile : `
    query userPublicProfile($username: String!) {
        matchedUser(username: $username) {
            username
            githubUrl
            twitterUrl
            linkedinUrl
            profile {
                ranking
                userAvatar
                realName
                aboutMe
                school
                websites
                countryName
                company
                jobTitle
                skillTags
                postViewCount
                postViewCountDiff
                reputation
                reputationDiff
                solutionCount
                solutionCountDiff
                categoryDiscussCount
                categoryDiscussCountDiff
            }
            languageProblemCount {
            languageName
            problemsSolved
            }
        }
    }
`,

query_rating : `
    query userContestRankingInfo($username: String!) {
        userContestRanking(username: $username) {
            attendedContestsCount
            rating
            globalRanking
            totalParticipants
            topPercentage
            badge {
                name
            }
        }
        userContestRankingHistory(username: $username) {
            attended
            trendDirection
            problemsSolved
            totalProblems
            finishTimeInSeconds
            rating
            ranking
            contest {
                title
                startTime
            }
        }
    }
`,
query_solved_problems : `
    query userProblemsSolved($username: String!) {
        allQuestionsCount {
            difficulty
            count
        }
        matchedUser(username: $username) {
            problemsSolvedBeatsStats {
                difficulty
                percentage
            }
            submitStatsGlobal {
                acSubmissionNum {
                    difficulty
                    count
                }
            }
        }
    }
`,
query_badges : `
    query userBadges($username: String!) {
        matchedUser(username: $username) {
            badges {
                id
                name
                shortName
                displayName
                icon
                hoverText
                medal {
                    slug
                    config {
                        iconGif
                        iconGifBackground
                    }
                }
                creationDate
                category
            }
            upcomingBadges {
                name
                icon
                progress
            }
        }
    }
`,

query_ac_submission : `
    query recentAcSubmissions($username: String!, $limit: Int!) {
        recentAcSubmissionList(username: $username, limit: $limit) {
            id
            title
            titleSlug
            timestamp
        }
    }
`}
