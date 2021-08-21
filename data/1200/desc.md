**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Bờm và Cuội chơi trò chơi trên các dãy số. Bờm viết ra dãy ~X=X_1 X_2…X_N~. Cuội viết ra dãy ~Y=Y_1 Y_2…Y_N~. Sau khi học xong bài so sánh, Bờm và Cuội biết rằng dãy ~X~ được coi là lớn hơn dãy ~Y~ nếu như tồn tại vị trí ~k≤N~ thỏa mãn:
- ~X_i=Y_i, ∀1≤i<k~
- ~X_k>Y_k~

Sau khi liếc qua hai dãy, Cuội cho phép Bờm thực hiện ~Q~ thao tác thay đổi. Ở thao tác thứ ~i\ (1≤i≤Q)~, Bờm thay số ở vị trí ~a_i\ (1≤a_i≤N)~ trên dãy ~X~ bằng giá trị ~b_i~.

**Yêu cầu:** Hãy xác định sau mỗi thao tác, dãy của Bờm có lớn hơn dãy của Cuội hay không.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương ~N~ và ~Q~;
- Dòng thứ hai chứa ~N~ số nguyên không âm ~X_1,X_2,…,X_N\ (X_i≤10^9)~;
- Dòng thứ ba chứa ~N~ số nguyên không âm ~Y_1,Y_2,…,Y_N\ (X_i≤10^9)~;
- ~Q~ dòng cuối, dòng thứ ~i\ (1≤i≤Q)~ chứa hai số nguyên ~a_i,b_i\ (1≤a_i≤N;0≤b_i≤10^9)~.

## Dữ liệu ra:
- Ghi ra ~Q~ dòng, dòng thứ ~i~ ghi tương ứng câu trả lời sau thao tác thứ ~i~. Ghi ra ký tự `Y` trong trường hợp dãy của Bờm lớn hơn, ghi ra `N` trong trường hợp ngược lại.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
4 6 5 2 3
4 7 5 4 8
2 7 
4 5
3 1
2 8
```
#### Dữ liệu ra:
```
N
Y
N
Y
```

## Giới hạn:
- ~30\%~ số test tương ứng ~30\%~ số điểm có ~N,Q≤1000~;
- ~30\%~ số test tương ứng ~30\%~ số điểm có ~N,Q≤100000;0≤X_i,Y_i≤1;b_j=1~;
- ~40\%~ số test còn lại tương ứng ~40\%~ số điểm có ~N,Q≤3.10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)