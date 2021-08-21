Alice và Bob cùng hát Karaoke, ban đầu tên bài hát là một xâu ký tự rỗng. Trong mỗi lượt chọn, người đến lượt sẽ chọn một chữ cái ghép vào cuối tên bài hát hiện tại. Hai người luân phiên chọn, Alice chọn đầu tiên.

Người đến lượt chọn phải chọn chữ cái sao cho tên bài hát sau lượt chọn đó phải là tiền tố của tên một bài hát yêu thích của người đó. Nếu ai không chọn được thì thua cuộc.

Cả Alice và Bob đều rất sành sỏi nên luôn biết chọn một cách tối ưu. Hãy xác định xem ai là người thắng cuộc?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n$ là số bài hát yêu thích của Alice;
- $n$ dòng tiếp theo, mỗi dòng chứa một chuỗi ký tự là tên một bài hát yêu thích của Alice;
- Dòng tiếp theo chứa số nguyên dương $m$ là số bài hát yêu thích của Bob;
- $m$ dòng tiếp theo, mỗi dòng chứa một chuỗi ký tự là tên một bài hát yêu thích của Bob.

Tên các bài hát chỉ chứa các chữ cái la-tin thường, tổng độ dài của tên tất cả các bài hát không quá $2\times 10^5$.

## Dữ liệu ra:
- Ghi ra tên của người thắng cuộc (Alice hoặc Bob).

## Ví dụ:
#### Dữ liệu vào:
```
2
aaa
bbb
3
aab
aba
bbb
```

#### Dữ liệu ra:
```
Alice
```

#### Dữ liệu vào:
```
2
acg
beh
2
adi
bfj
```

#### Dữ liệu ra:
```
Bob
```

#### Dữ liệu vào:
```
3
ja
sam
vlak
5
sto
zgazit
ce
te
mali
```

#### Dữ liệu ra:
```
Alice
```

**Giải thích test ví dụ $1$:**
- Nếu Alice chọn $b$ đầu tiên, Bob phải chọn $b$, và Alice lại chọn $b$. Tên bài hát lúc này là $bbb$ và Bob không thể chọn tiếp, do đó Alice thắng.
- Nếu Alice chọn $a$ trước thì Bob sẽ chọn $b$, tên bài hát lúc này là $ab$ và Alice không thể chọn tiếp, Alice sẽ thua.

## Giới hạn:
- $50\%$ số điểm của bài có tổng độ dài tên tất cả các bài hát không quá $2000$ ký tự.

**Chú ý:** Những bài làm chỉ ghi ra "Alice" hoặc "Bob" sẽ không được điểm!!!!