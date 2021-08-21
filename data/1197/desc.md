**<center>Nguồn: Ôn Thầy Hiếu Hưng Yên - T11/2019</center>**

Một xâu ~S~ độ dài ~n~ có độ lặp là ~k\ (k≥1)~ nếu có thể biểu diễn nó dưới dạng tổng một xâu nào đó ~k~ lần. Ví dụ xâu `aabaabaabaab` có thể coi độ lặp là ~2~ hoặc ~4~ nhưng không thể có độ lặp là ~3,5,6,…~

Cho ~m~ phép biến đổi, mỗi phép được xác định bởi ba tham số ~a,b,c~ thay một ký tự ~a~ bằng một ký tự ~b~ với chi phí ~c~. Có thể có nhiều phép biến đổi hai ký tự giống nhau nhưng có chi phí khác nhau. **Ví dụ:** ~S=abcdba~ và ~5~ phép biến đổi: ~(a,z,3),(z,c,2),(a,d,1),(d,a,3),(a,z,5)~. Ta có thể biến đổi xâu ~S~ như sau:
~S=abcdba→dbcdba→dbcdbz→dbcdbc~
Với chi phí biến đổi là: ~1+3+2=6~.

**Yêu cầu:** Hãy xác định chi phí nhỏ nhất để biến đổi xâu ~S~ thành một xâu có độ lặp lớn hơn ~1~.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên ~n, m\ (n,m≤10^5)~;
- Dòng thứ hai chứa xâu ~S~ gồm ~n~ ký tự la tinh thường;
- ~m~ dòng tiếp, mỗi dòng chứa hai chữ cái la tinh thường và một số nguyên ~c~ xác định một phép biến đổi.

## Dữ liệu ra:
- Ghi ra chi phí biến đổi nhỏ nhất. Ghi ra ~-1~ trong trường hợp không tồn tại phép biến đổi.

## Ví dụ:
#### Dữ liệu vào:
```
6 5
abcdba
a z 3
z c 2
a d 1
d a 3
a z 5
```

#### Dữ liệu ra:
```
6
```