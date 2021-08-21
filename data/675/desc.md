**<center>Nguồn: Beginner Free Contest 16</center>**

Người ta đặt một con Robot lên một tọa độ Descartes tại vị trí ~(0, 0)~. Con Robot được người điều khiển ra lệnh di chuyển đến vị trí ~(M, N)~ sau đúng ~K~ bước thỏa mãn điều kiện với mỗi bước di chuyển ở vị trí ~(i, j)~ chỉ có thể đến một trong ~4~ vị trí ~(i − 1, j), (i + 1, j), (i, j − 1), (i, j + 1)~.

**Yêu cầu**: Bạn hãy tính xem con Robot có bao nhiêu cách di chuyển đến vị trí ~(M, N)~ thỏa mãn yêu cầu của người điều khiển.

## Dữ liệu vào:
- Dòng đầu gồm một số nguyên dương ~T~ là số testcase ~(T ≤ 10)~;
- ~T~ dòng tiếp theo, mỗi dòng chứa các số nguyên ~K, M, N,\mod\ (0 ≤ K, |M|, |N| ≤ 10^5; 1 ≤ \mod ≤ 10^9)~.

## Dữ liệu ra:
- In ra kết quả bài toán sau khi chia lấy dư cho ~\text{mod}~ ở mỗi dòng ứng với mỗi testcase.

## Ví dụ:
#### Dữ liệu vào:
```
2
4 -3 1 99
5 2 1 99
```

#### Dữ liệu ra:
```
4
50
```