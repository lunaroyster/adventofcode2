import re

def alphabeticalCharacter(item1, item2):
    return(item1["char"]<item2["char"])

class Room:
    def __init__(self, roomStr):
        self.roomStr = roomStr
        self.nameArray = re.findall("([a-z]+)(?=-)", self.roomStr)
        self.sectorID = int(re.findall("-([0-9]+)", self.roomStr)[0])
        self.checkSum = re.findall("\[([a-z]+)\]", self.roomStr)[0]
        
    def generateCheckSum(self):
        nameCharacters = ''.join(map(str, self.nameArray))
        
        charCount = {}
        for character in nameCharacters:
            if(character not in charCount):
                charCount[character] = 0
            charCount[character] += 1;
            
        charCountList = []
        for character in charCount:
            characterEntry = {"char": character, "count": charCount[character]}
            charCountList.append(characterEntry)
            
        charCountList.sort(key = lambda x: x["char"])
        checkSumEntryList = []
        for i in range(0,5):
            bestEntry = {"count": 0}
            for characterEntry in charCountList:
                if(characterEntry["count"]>bestEntry["count"]):
                    bestEntry = characterEntry
            
            checkSumEntryList.append(bestEntry)
            charCountList.remove(bestEntry)
        checkSum = ""
        for entry in checkSumEntryList:
            checkSum += entry["char"]
        return checkSum
        
    def verifyCheckSum(self):
        return(self.generateCheckSum()==self.checkSum)
        
    def __str__(self):
        print(self.nameArray, self.sectorID, self.checkSum)
        
def main():
    checkSumCount = 0
    while(True):
        roomStr = raw_input()
        if(roomStr==""):
            break;
        room = Room(roomStr)
        if(room.verifyCheckSum()):
            checkSumCount+=room.sectorID
    print checkSumCount
    
main()