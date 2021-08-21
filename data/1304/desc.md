**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 07/11/2020</center>**

Trên trục số cho ~𝑚~ đoạn thẳng và ~𝑛~ điểm, đoạn thẳng ~𝑖\ (1 ≤ 𝑖 ≤ 𝑚)~ có tọa độ hai đầu mút là ~𝑎_𝑖, 𝑏_𝑖~, điểm ~𝑗\ (1 ≤ 𝑗 ≤ 𝑛)~ có tọa độ là ~𝑥_𝑗~. Đoạn thẳng ~𝑖~ được gọi là là chứa điểm ~𝑗~ nếu ~min(𝑎_𝑖, 𝑏_𝑖) ≤ 𝑥_𝑗 ≤ max(𝑎_𝑖, 𝑏_𝑖)~.

Hãy xác định số lượng đoạn thẳng chứa mỗi điểm.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~𝑚, 𝑛\ (1 ≤ 𝑚, 𝑛 ≤ 10^5)~;
- ~m~ dòng tiếp theo, dòng thứ ~i~ chứa hai số nguyên ~𝑎_𝑖, 𝑏_𝑖\ (|𝑎_𝑖|, |𝑏_𝑖| ≤ 10^9, ∀𝑖)~;
- Dòng cuối cùng chứa ~𝑛~ số nguyên ~𝑥_1, 𝑥_2, … , 𝑥_𝑛\ (|𝑥_𝑗| ≤ 10^9, ∀𝑗)~.

## Dữ liệu ra:
- Một dòng duy nhất chứa ~𝑛~ số nguyên lần lượt là số lượng đoạn thẳng chứa điểm ~1,2, … , 𝑛~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
0 5
-3 2
7 10
1 6
```

#### Dữ liệu ra:
```
2 0
```