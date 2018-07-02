import random


def single_ability_score():
    score = 0
    for i in range(3):
        roll = 1
        while roll == 1:
            roll = random.randrange(1, 7)
        score += roll
    return score


def ability_scores():
    scores = []
    for i in range(6):
        scores.insert(i, single_ability_score())
    print(scores)


ability_scores()
