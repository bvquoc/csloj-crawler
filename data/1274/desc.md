Các nhà khoa học đã tìm ra được một dải đất dài, gồm ~N~ khu vực liền nhau thành một dãy mà mỗi khu vực có một độ cao nhất định. Vùng đất này nằm ngoài biển, vì thế, khi mực nước biển thay đổi, nó cũng làm cho một số khu vực trong dải đất biến mất và các khu vực còn lại tạo thành các đảo. 

<center><img src="/images/problems/1274/ISLAND.png" width="500px" /></center>

Ví dụ như ở hình vẽ trên, với mực nước biển là ~2.6~, thì dải đất này sẽ bị chia làm ~3~ đảo.

Khi mực nước biển đạt một mốc nào đó, số đảo sẽ là lớn nhất có thể, các nhà khoa học muốn tìm ra con số đảo lớn nhất này.

## Dữ liệu vào:
- Dòng đầu tiên số nguyên dương ~N\ (N≤10^6);
- ~N~ dòng sau mỗi dòng là một số nguyên trong đoạn ~[1,10^9]~ thể hiện độ cao của các khu vực trong dải đất.

## Dữ liệu ra:
- Số nguyên duy nhất là kết quả của bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
7
5
6
1
3
2
9
8
```

#### Dữ liệu ra:
```
3
```

## Giới hạn:
- ~6~ test có ~N≤1000~.
- ~6~ test có ~N≤10^5~ và độ cao của các khu vực không quá ~20~'
- ~7~ test có ~N≤10^5~ và không có hai khu vực nào có độ cao như nhau.
- ~21~ test có ~N≤10^6~.