Có $3$ đống sỏi có số lượng sỏi theo thứ tự là $a,b,c$. Hải Phong thực hiện liên tiếp thao tác sau:
- Chọn ra hai đống sỏi bất kỳ và chuyển sỏi ở đống lớn hơn sang đóng nhỏ hơn với số lượng = số lượng ở đống nhỏ hơn (Đống nhỏ hơn sau khi chuyển sẽ có số lượng sỏi tăng gấp đôi), nếu $2$ đống bằng nhau thì thành một đống có số lượng gấp đôi.

Hải Phong muốn dồn sao cho có ít nhất $1$ đống không còn sỏi sau không quá $K$ thao tác. Bạn hãy giúp Hải Phong thực hiện công việc trên.

## Dữ liệu vào:
- Dòng đầu chứa $3$ số nguyên dương $a,b,c$;
- Dòng thứ hai chứa số nguyên dương $K$.

## Dữ liệu ra:
- Dòng đầu Số nguyên dương $N\ (N≤K)$ là số thao tác cần thực hiện để thỏa mãn điều kiện đề bài;
- $N$ dòng tiếp theo, mỗi dòng ghi hai số $u,v\ (1≤u≠v≤3)$ mô tả thao tác di chuyến sỏi ở đống $u$ sang đống $v$.

Dữ liệu đề bài đảm bảo luôn có phương án thực hiện thỏa mãn.

## Ví dụ:
#### Dữ liệu vào:
```
2 17 7
4
```

#### Dữ liệu ra:
```
4
2 1
2 3
3 1
1 2
```

#### Dữ liệu vào:
```
2 17 7
15
```

#### Dữ liệu ra:
```
6
3 1
3 1
2 3
2 3
2 3
3 1
```

## Giới hạn:
- $20\%$ số điểm có $2< a+b+c< 1000; 0< K < 15$;
- $40\%$ số điểm khác có $1000≤a+b+c<10^{18}; 0< K<15$;
- $40\%$ số điểm còn lại có $1000≤a+b+c<10^{18}; 15≤K<1500$;