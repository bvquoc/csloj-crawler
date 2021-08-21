**<center>Nguồn: Free Contest 8 (9)</center>**

Cho xâu ~S~ có độ dài ~n~ chỉ gồm các kí tự ~0~ hoặc ~1~. Cho ~m~ truy vấn có dạng ~L\ R~, với mỗi truy vấn, kiểm tra xem đoạn con từ ~L~ đến ~R~ của xâu ~S~ có phải là xâu đối xứng hay không. In ra `YES` nếu đoạn con là xâu đối xứng và `NO` nếu ngược lại.

## Dữ liệu vào:
- Dòng đầu tiên chứa xâu ~S~, độ dài xâu không vượt quá ~5000~;
- Dòng thứ hai chứa số nguyên ~m\ (1 ≤ m ≤ 5000)~; 
- ~m~ dòng tiếp theo, mỗi dòng chứa hai số nguyên ~L~ và ~R~, mô tả một truy vấn ~(1 ≤ L ≤ R ≤ n)~.

## Dữ liệu ra:
- Với mỗi truy vấn, in ra `YES` nếu đoạn con là xâu đối xứng và `NO` nếu ngược lại.

## Ví dụ:
#### Dữ liệu vào:
```
1001010
2
6 7
```

#### Dữ liệu ra:
```
NO
```

#### Dữ liệu vào:
```
00001
11
1 4
3 5
3 4
5 5
2 5
4 5
1 4
5 5
2 5
1 5
2 4
```

#### Dữ liệu ra:
```
YES
NO
YES
YES
NO
NO
YES
YES
NO
NO
YES
```

#### Dữ liệu vào:
```
1101111111111
5
4 8
1 9
5 9
9 13
10 13
```

#### Dữ liệu ra:
```
YES
NO
YES
YES
YES
```