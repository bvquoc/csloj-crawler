**<center>Nguồn: Free Contest 8 (9)</center>**

Ta gọi xâu nhị phân độ dài ~N~ là dãy gồm ~N~ kí hiệu, mỗi kí hiệu chỉ là ~1~ hoặc ~0~. Như đã biết, có tất cả ~2^N~ xâu như vậy. Trong bài toán này, ta chỉ quan tâm đến những xâu nhị phân độ dài ~N~ chứa đoạn gồm ~K~ số ~1~ liên tiếp. Vì con số này là rất lớn khi ~N~ và ~K~ lớn, nên chỉ cần đưa ra phần dư trong phép chia của số này cho ~1000007~.

Cho trước hai số nguyên dương ~N~ và ~K~, hãy tìm phần dư trong phép chia của số lượng xâu nhị phân độ dài ~N~ chứa đoạn gồm ~K~ số ~1~ liên tiếp cho ~1000007~.

## Dữ liệu vào:
- Một dòng duy nhất gồm hai số nguyên dương ~N~ và ~K\ (1 ≤ N ≤ 100000, 1 ≤ K ≤100)~.

## Dữ liệu ra:
- In ra phần dư trong phép chia của số lượng xâu nhị phân thỏa mãn cho ~1000007~.

## Ví dụ:
#### Dữ liệu vào:
```
3 2
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
5 1
```

#### Dữ liệu ra:
```
31
```

#### Dữ liệu vào:
```
7 10
```

#### Dữ liệu ra:
```
0
```

#### Giải thích:
- Ví dụ ~1:~ Có ba xâu: ~011,110,111~;
- Ví dụ ~2:~ Có tất cả xâu nhị phân độ dài ~5~ ngoại trừ ~00000~;
- Ví dụ ~3:~ Không có xâu thỏa mãn.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)